import express from "express";
import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  updateIUser
} from "../controllers/users.js";

import { useraArray } from "./usersArray.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.send({ useraArray });
});

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);
router.patch("/:id", updateIUser);
export default router;
