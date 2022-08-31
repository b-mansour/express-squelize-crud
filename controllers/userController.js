const db = require("../models");

const User = db.users;

//create user

const addUser = async (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const user = await User.create(data);
  res.status(200).send(user);
  console.log(user);
};

const getAllUsers = async (req, res) => {
  let users = await User.findAll({
    attributes: ["name", "email"],
  });
  res.status(200).send(users);
};

const getOneUser = async (req, res) => {
  let user = await User.findOne({
    where: { id: req.params.id },
  });
  res.status(200).send(user);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });

  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.destroy({ where: { id: id } });
  res.status(200).send("User has been deleted successfully");
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
