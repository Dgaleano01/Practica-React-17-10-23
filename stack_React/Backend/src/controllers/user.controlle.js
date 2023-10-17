import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const findUser = await User.findById(req.params.id);
  if (!findUser) return res.status(404).json({ message: "User not found" });
  res.json(findUser);
};

export const createUser = async (req, res) => {
  const { name } = req.body;
  const newUser = User({
    name,
  });
  await newUser.save();
  res.status(201).json({ message: "User created" });
};

export const updateUser = async (req, res) => {
  const findUser = await User.findByIdAndUpdate(req.params.id, req.body);
  if(!findUser) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User updated" });
};

export const deleteUser = async (req, res) => {
  const findUser =await User.findByIdAndDelete(req.params.id);
  if (!findUser) return res.status(404).json({ message: "User not found" });
  res.sendStatus(204);
};
