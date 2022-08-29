const express = require("express");
const router = express.Router();
const {
  getProject,
  setProject,
  updateProject,
  deleteProject,
} = require("./project.controller");

router.route("/").get(getProject).post(setProject);
router.route("/:id").delete(deleteProject).put(updateProject);

module.exports = router;
