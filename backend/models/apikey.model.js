const mongoose = require("mongoose");

const apiKeySchema = mongoose.Schema(
  {
    appId: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApiKey", apiKeySchema);
