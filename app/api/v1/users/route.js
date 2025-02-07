import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";



export async function GET() {
  await dbConnect()
  try {
    const users = await User.find().select('-password') // Exclude password field
    return NextResponse.json(users, { status: 200 })
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}

export async function POST(request) {
    await dbConnect()
    try {
        const { email, password, firstname, lastname, gender, phone, role } = await request.json();
        if (!firstname || !lastname || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
                email,
                password: hashedPassword,
                firstname,
                lastname,
                gender,
                phone,
                role
            });
        const user = await newUser.save();
        return NextResponse.json({ success: true, message: "User created successfully", user }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
