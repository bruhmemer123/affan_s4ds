const express = require("express");
const router = express.Router();
const {
  getAllHackathons,
  getHackathonById,
  updateHackathon,
  deleteHackathon,
  createHackathon
} = require("../controllers/hackathonController");

// Hackathon routes
router.get("/", getAllHackathons);
router.get("/:id", getHackathonById);
router.put("/:id", updateHackathon);
router.delete("/:id", deleteHackathon);
router.post("/", createHackathon);

module.exports = router;
