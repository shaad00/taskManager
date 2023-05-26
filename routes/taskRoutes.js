const express = require("express");
const router = express.Router();
const userTask = require("../controller/userTask");

router.route("/").get(userTask.getAllTask).post(userTask.createTask);
router
  .route("/:id")
  .get(userTask.getSingleTask)
  .patch(userTask.updateTask)
  .delete(userTask.deleteTask);

module.exports = router;
