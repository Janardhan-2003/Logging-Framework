const express = require("express");
const appKey = require("../models/apikey.model");
const { generateAppId, generateApiKey } = require("../utils/generateKeys");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { owner, appName } = req.body;

    if (!owner || !appName) {
      res
        .status(400)
        .json({ success: false, message: "AppName and owner are required" });
    }

    const appId = generateAppId(appName);
    const apiKey = generateApiKey();

    const newApp = new appKey({ appId, apiKey, owner, appName });
    await newApp.save();

    return res
      .status(201)
      .json({ success: true, message: "App created Successfully.", app:newApp });
  } catch (e) {
    console.error("app creation failed", e)
    return res
      .status(500)
      .json({ success: false, message: "App creation failed.", error:e.message });
  }
});

router.get("/:owner", async (req, res) => {
  try {
    const { owner } = req.params;
    const apps = await appKey.find({ owner });
    res.send(apps);
  } catch (e) {
    console.error("Fetching apps failed",e)
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch apps", error:e.message });
  }
});

module.exports = router;
