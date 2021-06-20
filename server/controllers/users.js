import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import users from '../models/user.js';


export const signup = async (req, res) => {

}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if (!existingUser) return res.status(404).json({ message: 'We cannot find you. Please sign up first!' })
        if (!correctPassword) return res.status(400).json({ message: 'Invalid login credentials! Please check them and try again.' })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'hanjariesLoginToken', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later!' })
    }

}
