import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
dotenv.config();

// routes

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

// clients
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(port, () => console.log(`Server listinging on port ${port}`));
