import { config } from "dotenv";
import express from "express";
import cors from 'cors'
import router from "./Routes/workout.js";
import { mongoose } from "mongoose";
config();
const app = express();
// cross origin 
app.use(cors({origin:'http://localhost:5173'}))
//middleware
app.use(express.json());

// for all routes
app.use("/api/workout", router);

// connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log("server is connected");
    });

    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
