const express = require("express");
const router = express.Router();
const { protect } = require("../authorization/authorization.middleware");
const {
  getProject,
  setProject,
  updateProject,
  deleteProject,
} = require("./project.controller");

//project router
router.route("/").get(getProject).post(setProject);
router.route("/:id").delete(deleteProject).put(updateProject);

module.exports = router;
