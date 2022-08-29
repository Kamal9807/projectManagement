//install npm i express-async-handler in terminal
const asyncHandler = require("express-async-handler");

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
  if (!req.body.pName) {
    res.status(400);
    throw new Error("please add a project Name");
  }
  if (!req.body.pNumber) {
    res.status(400);
    throw new Error("please add a project Number");
  }
  if (!req.body.pStartDate) {
    res.status(400);
    throw new Error("please add a project start Date");
  }
  if (!req.body.pEndDate) {
    res.status(400);
    throw new Error("please add a project end Date");
  }
  if (!req.body.pStatus) {
    res.status(400);
  }
  if (!req.body.pMember) {
    res.status(400);
    throw new Error("member should be added");
  }
  const project = await Project.create({
    pName: req.body.pName,
    pNumber: req.body.pNumber,
    pStartDate: req.body.pStartDate,
    pEndDate: req.body.pEndDate,
    pStatus: req.body.pStatus,
    pMember: req.body.pMember,
  });
  res.status(200).json(project);
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
