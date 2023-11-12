import { v4 as uuid4 } from "uuid";
import { useraArray } from "../routes/usersArray.js";

export const createUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, _id: uuid4() };
  useraArray.push(userWithId);
  console.log(useraArray);
  res.send({ useraArray });
};

const userIdentity = (req, res) => {
  let user = useraArray.pop((user) => user._id === req.params.id);
  return user;
};

export const getUser = (req, res) => {
  const user = userIdentity(req, res);
  console.log(user);
  res.status(200).json({ user });
};

export const deleteUser = (req, res) => {
  res.send({ useraArray });
  console.log(useraArray);
};

export const updateUser = (req, res) => {
  let user = userIdentity(req, res);
  user = { ...req.body, _id: uuid4() };
  res.send({ user });
  console.log(user);
};

export const updateIUser = (req, res) => {
  let user = userIdentity(req, res);
  user = { ...req.body };
  res.send({ user });
  console.log(user);
};
