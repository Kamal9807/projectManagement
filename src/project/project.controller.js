//install npm i express-async-handler in terminal
const asyncHandler = require("express-async-handler");
const { Error } = require("mongoose");

const Project = require("./project.model");

// @desc Get project
// @route GET/projectManagement
// @access private
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.find();
  res.status(200).json(project);
});

// @desc set project
// @route POST /projectManagement
// @access private
const setProject = asyncHandler(async (req, res) => {
  const { projectName, projectCode, startDate, endDate, status } = req.body;
  if (!(projectName && projectCode && startDate && endDate && status)) {
    res.status(400);
    throw new Error("please add a valid data");
  }

  console.log("req.user::", req.user);
  const project = await Project.create({
    projectName: projectName,
    projectCode: projectCode,
    startDate: startDate,
    endDate: endDate,
    status: status,
    projectMembers: req.user.id,
  });
  // res.status(200).json(project);
  // it passes the true value first and successfully added mess in last
  res
    .status(200)
    .json({ success: true, result: project, message: "Successfully added" });
});

// @desc update project
// @route PUT/projectManagement/:id
// @access private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }

  //UpdateBYID
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProject);
});

// @desc Delete project
// @route DELETE/projectManagement/:id
// @access private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }

  await project.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getProject,
  setProject,
  updateProject,
  deleteProject,
};
