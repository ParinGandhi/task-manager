const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// const me = new User({
//   name: "Parin Gandhi",
//   age: 44,
// });

// me.save()
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

const task = new Task({
  description: "Learn nodejs",
  completed: false,
});

task
  .save()
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log({ error });
  });
