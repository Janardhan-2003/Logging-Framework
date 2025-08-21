const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    appId: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["info", "error", "warn"],
      default: 'info',
    },
    message: {
      type: String,
      required: true,
    },
    meta: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", logSchema);
