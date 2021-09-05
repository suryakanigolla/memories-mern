import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) res.status(400).json({ message: "Email is required" });
    if (!password) res.status(400).json({ message: "Password is required" });

    const existingUser = await User.findOne({ email });

    if (!existingUser)
      res.status(404).json({ message: "Account does not exist" });

    const isPassMatch = await bcrypt.compare(password, existingUser.password);

    if (!isPassMatch) res.status(400).json({ message: "Invalid Credentials" });

    if (existingUser && isPassMatch) {
      const token = jwt.sign(
        { userId: existingUser._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      existingUser.token = token;

      res.status(200).json(existingUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, passwordConfirm } = req.body;

    if (!firstName) res.status(400).json({ message: "First Name is required" });
    if (!lastName) res.status(400).json({ message: "Last Name is required" });
    if (!email) res.status(400).json({ message: "Email is required" });
    if (!password) res.status(400).json({ message: "Password is required" });
    if (!passwordConfirm)
      res.status(400).json({ message: "Password Confirm is required" });

    if (password !== passwordConfirm)
      res.status(400).json({ message: "Passwords does not match" });

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({
        message: "This email is already being used by another account",
      });
    }

    const hashPass = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashPass,
    });

    const token = jwt.sign(
      {
        userId: newUser._id,
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    newUser.token = token;

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
