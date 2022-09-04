const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const empSchema = new mongoose.Schema(
  {
    empRollno: {
      type: String,
      required: [true, "please add a employee name"],
    },
    emailId: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

empSchema.methods.getSignedJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    "banumathi123",
    { expiresIn: "1h" }
  );
};
module.exports = mongoose.model("employees", empSchema);
