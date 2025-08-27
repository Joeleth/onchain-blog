import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";

import validator from "validator";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  if (validator.isEmail(req.body.email) === false) {
    return res.status(400).json("use a valid email");
  }
  const { username, email, password } = req.body;
  try {
    const person = await User.create({
      username,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    const { password: pass, ...rest } = person._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next("wrong email");

    const validPassword = await bcryptjs.compare(password, validUser.password);
    console.log(password, validUser.password);
    if (!validPassword) return next(new Error("Invalid password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const googleUser = await User.findOne({ email: req.body.email });
    if (googleUser) {
      const token = jwt.sign({ id: googleUser._id }, process.env.JWT);
      const { password: pass, ...rest } = googleUser._doc;
      res
        .cookie("access_Token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-5) +
        Math.random().toString(36).slice(-5);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const googleAccount = await User.create({
        username: "xbt" + Math.floor(Math.random(800) * 1000),
        password: hashedPassword,
        email: req.body.email,
      });

      const { password: pass, ...rest } = googleAccount._doc;
      const token = jwt.sign({ id: googleAccount._id }, process.env.JWT);
      res
        .cookie("Access_Token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    res.clearCookie("Access_Token");
    res.json("user successfully signed out");
  } catch (error) {
    next(error);
  }
};
