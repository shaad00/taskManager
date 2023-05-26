const getAllTask = (req, res) => {
  res.send({ message: "Hola from shadmaan" });
};
const createTask = (req, res) => {
  res.send({ message: "Hola create shadmaan" });
};
const getSingleTask = (req, res) => {
  res.send({ message: "Hola single shadmaan" });
};
const updateTask = (req, res) => {
  res.send({ message: "Hola update shadmaan" });
};
const deleteTask = (req, res) => {
  res.send({ message: "Hola delete shadmaan" });
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
