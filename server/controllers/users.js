import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/user.js';


export const signup = async (req, res) => {

    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingUser = await UserModal.findOne({ email });
        if (existingUser) return res.status(404).json({ message: 'Your account is already in our database. Please login!' })
        if (password !== confirmPassword) return res.status(404).json({ message: 'Check your passwords!' })

        const hash = await bcrypt.hash(password, 12);

        const result = await UserModal.create({ email, password: hash, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, 'hanjariesLoginToken', { expiresIn: "1h" });

        res.status(200).json({ result, token });


    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later!' });
        console.log(error);
    }

}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModal.findOne({ email });
        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if (!existingUser) return res.status(404).json({ message: 'We cannot find you. Please sign up first!' })
        if (!correctPassword) return res.status(400).json({ message: 'Invalid login credentials! Please check them and try again.' })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'hanjariesLoginToken', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later!' })
    }

}
