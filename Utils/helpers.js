import twilio from "twilio";
import User from "../models/User.js";
import { encrypt, decrypt, hashPassword } from "./utils.js";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

async function verifyCode(user, code) {
  let number = parseInt(decrypt(user.phoneNumber));
  return await client.verify
    .services(process.env.TWILIO_SERVICE_ID)
    .verificationChecks.create({
      to: `+${number}`,
      code: `${parseInt(code)}`,
    });
}

async function sendCode(user) {
  let number = parseInt(decrypt(user.phoneNumber));
  return await client.verify
    .services(process.env.TWILIO_SERVICE_ID)
    .verifications.create({
      to: `+${number}`,
      channel: "sms",
    });
}

async function createUser(username, phoneNumber, password) {
  let phone = encrypt(phoneNumber);

  let newUser = new User({
    username,
    phoneNumber: {
      iv: phone.iv,
      numberHashed: phone.content,
    },
    password: await hashPassword(password),
  });
  await newUser.save();
  return newUser;
}

export { createUser, sendCode, verifyCode };
