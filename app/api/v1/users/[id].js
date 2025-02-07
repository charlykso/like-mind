import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import mongoose from "mongoose";

export default async function handler(req, res) {
    await dbConnect();
    const { id } = req.query;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }

    switch (req.method) {
        case 'GET':
            return handleGetRequest(id, res);
        case 'PUT':
            return handlePutRequest(id, req.body, res);
        case 'DELETE':
            return handleDeleteRequest(id, res);
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function handleGetRequest(id, res) {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

async function handlePutRequest(id, body, res) {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const { email, firstname, lastname, role, phone, gender } = body;
        user.email = email;
        user.firstname = firstname;
        user.lastname = lastname;
        user.role = role;
        user.phone = phone;
        user.gender = gender;
        await user.save();
        res.status(200).json({ success: true, message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

async function handleDeleteRequest(id, res) {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        await user.remove();
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}