const mongoose = require("mongoose");
const express = require("express");
const Log = require("../models/logs.model");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/ingest", authMiddleware, async (req, res) => {
  try {
    const { appId, level, message, meta } = req.body;

    const log = new Log({ appId, level, message, meta });
    await log.save();

    return res.status(201).json({ success: true, message: "Log Stored" });
  } catch (error) {
    console.error("Failed to post log", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to ingest log" });
  }
});

router.get("/:appId", authMiddleware, async (req, res) => {
  try {
    const { appId } = req.params;

    const logs = Log.find({ appId }).sort({ createdAt: -1 });

    return res.json(logs);
  } catch (error) {
    console.error("Failed to get logs", error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to fetch the logs" });
  }
});

module.exports = router;
