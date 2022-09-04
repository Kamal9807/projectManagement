const mongoose = require("mongoose");

//project schema
const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "please add a project name"],
    },
    projectCode: {
      type: Number,
      required: [true, "please add a project number"],
    },
    startDate: {
      type: Date,
      required: [true, "please add a project start date"],
    },
    endDate: {
      type: Date,
      required: [true, "please add a project end date"],
    },
    status: {
      type: String,
      enum: ["Inprogress", "Completed", "Review", "Deployed"],
      default: "Inprogress",
    },
    projectMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("project", projectSchema);
