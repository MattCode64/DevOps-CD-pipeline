const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// :thumbsup: khodor i hope devops/mlops is not the future
// I hesitate to buy an air fryer
// I bought it !
// DOCKERHUB IMAGES!!!!!!!!!!!!!!!!!

const mongoURI =
  process.env.MONGO_URL ||
  "mongodb+srv://todolist:reverse@dbreversetodolist.32f5n.mongodb.net/?retryWrites=true&w=majority&appName=DBReverseTodoList";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
