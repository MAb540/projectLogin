import express from "express";
// import User from "../models/User.js";

// import { comparePassword } from "../Utils/utils.js";

// import { createUser, sendCode, verifyCode } from "../Utils/helpers.js";

// const authRouter = express.Router();

// authRouter.post("/signup", async (req, res, next) => {
//   const { username, phoneNumber, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (user) {
//       return res
//         .status(409)
//         .json({ error: "User with this username already exists" });
//     }
//     try {
//       let newUser = createUser(username, phoneNumber, password);

//       res
//         .status(200)
//         .json({ message: "Signup Success", username: newUser.username });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// authRouter.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username }).select(
//       "username password phoneNumber"
//     );
//     if (!user || !(await comparePassword(user.password, password))) {
//       return res.status(409).json({ error: "Invalid Username or Password" });
//     }

//     try {
//       const data = await sendCode(user);
//       console.log(data);

//       res.status(200).json({
//         message: "login Success! Please Enter the code to verify your account",
//         username,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Internal Error" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// authRouter.post("/verify", async (req, res) => {
//   console.log(req.body);

//   const { username, code } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(409).json({ error: "Invalid Username " });
//     }

//     try {
//       const data = await verifyCode(user, code);

//       if (data.status === "approved") {
//         res
//           .status(200)
//           .json({ valid: data.valid, message: "You have been verified" });
//         return;
//       } else if (data.status === "pending") {
//         res.status(404).json({ error: `try After some time` });
//         return;
//       }
//     } catch (error) {
//       res.status(error.status).json({ error: `${error}` });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// export default authRouter;
