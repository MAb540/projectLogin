import express from "express";
import User from "../models/User.js";

import {
  encrypt,
  decrypt,
  hashPassword,
  comparePassword,
} from "../Utils/utils.js";

import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const authRouter = express.Router();

authRouter.post("/signup", async (req, res, next) => {
  console.log(req.body);

  const { username, phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(409)
        .json({ error: "User with this username already exists" });
    }

    try {
      let pass = await hashPassword(password);
      let phone = encrypt(phoneNumber);

      let newUser = new User({
        username,
        phoneNumber: {
          iv: phone.iv,
          numberHashed: phone.content,
        },
        password: pass,
      });
      await newUser.save();

      res.status(200).json({ message: "Signup Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

authRouter.post("/login", async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).select(
      "username password phoneNumber"
    );
    if (!user || !(await comparePassword(user.password, password))) {
      return res.status(409).json({ error: "Invalid Username or Password" });
    }

    let number = parseInt(decrypt(user.phoneNumber));
    console.log(number);

    try {
      const data = await client.verify
        .services(process.env.TWILIO_SERVICE_ID)
        .verifications.create({
          to: `+${number}`,
          channel: "sms",
        });

      console.log(data);

      res.status(200).json({
        message: "login Success! Please Enter the code to verify your account",
        username,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

authRouter.post("/verify", async (req, res) => {
  console.log(req.body);

  const { username, code } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(409).json({ error: "Invalid Username " });
    }

    let number = parseInt(decrypt(user.phoneNumber));

    try {
      const data = await client.verify
        .services(process.env.TWILIO_SERVICE_ID)
        .verificationChecks.create({
          to: `+${number}`,
          code: `${parseInt(code)}`,
        });

      console.log(data);
      if (data.status === "approved") {
        res
          .status(200)
          .json({ valid: data.valid, message: "You have been verified" });
        return;
      }
    } catch (error) {
      console.log(error);
      res.status(error.status).json({ error: `${error}` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default authRouter;
