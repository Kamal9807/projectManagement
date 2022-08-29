const { time } = require("console");
const { TIMEOUT } = require("dns");
const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    pName: {
      type: String,
      required: [true, "please add a project name"],
    },
    pNumber: {
      type: Number,
      required: [true, "please add a project number"],
    },
    pStartDate: {
      type: Date,
      required: [true, "please add a project start date"],
    },
    pEndDate: {
      type: Date,
      required: [true, "please add a project end date"],
    },
    pStatus: {
      type: String,
      required: [true, "update the status"],
    },
    pMember: {
      type: String,
      required: [true, "member should be added"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("project", projectSchema);
