const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(express.json());

mongoose.connect("mongodb+srv://migueldev:sX6vS4MsUfkkGcqA@cluster0.ji63r.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0", {});

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(newUser);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
