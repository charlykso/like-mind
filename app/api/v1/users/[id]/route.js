import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await dbConnect()
    const { id } = params
    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: user }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    await dbConnect()
    const { id } = params
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "User deleted successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    await dbConnect()
    const { id } = params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }
        const { email, firstname, lastname, role, phone, gender, isVerified } = await request.json();
        user.email = email;
        user.firstname = firstname;
        user.lastname = lastname;
        user.role = role;
        user.phone = phone;
        user.gender = gender;
        user.isVerified = isVerified;
        user.updated_at = Date.now();
        await user.save();
        return NextResponse.json({ success: true, data: user }, { status: 200 });
        
    } catch (err) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}

