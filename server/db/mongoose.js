const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email must be valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("The password cannot contain 'password'");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const me = new User({
//   name: "  Parin Gandhi     ",
//   email: "   parin.a.gandhi@gmail.com   ",
//   password: "   password123    ",
// });

// me.save()
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

const task = new Task({
  description: "     Learn advanced javascript     ",
});

task
  .save()
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log({ error });
  });
