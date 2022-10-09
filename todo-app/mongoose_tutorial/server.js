const express = require("express");
const mongoose = require("mongoose");

const userModel = require("./index1");

const app = express();

app.use(express.json());

const User = new userModel();

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/customersdb", {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error is...", error);
  }
};

dbconnect();

app.post("/postdata", (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  User.name = name;
  User.age = age;
  User.save();
  res.send(User);
});

app.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.find({});
    console.log("users...", users);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, function () {
  console.log("OSFY Test App Server is running on port 3000!");
});
