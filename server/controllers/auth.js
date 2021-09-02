import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const userData = req.body;
  const { email, password } = userData;

  try {
    const existingUser = await User.findOne({ email });

    //If user does not exist
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    //Check if password is correct
    const isCorrect = await bcrypt.compare(password, existingUser.password);

    //If password is wrong
    if (!isCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    //Sign using jwt
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test", //secret
      { expiresIn: "1h" } //token expiry time
    );

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signup = async (req, res) => {
  const userData = req.body;
  const { firstName, lastName, email, password, passwordConfirm } = userData;

  try {
    const existingUser = await User.findOne({ email });

    //If user exists
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password != passwordConfirm) {
      return res.status(400).json({ message: "Passwords doesn't match" });
    }

    const hashPass = bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashPass,
      firstName,
      lastName,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ user: result, token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
