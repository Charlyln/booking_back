const express = require("express");
const likes = express.Router();
const Like = require("../models/like.model");

likes.get("/", async (req, res) => {
  try {
    const likes = await Like.findAll();
    res.status(200).json(likes);
  } catch (err) {
    res.status(400).json(err);
  }
});

likes.post("/", async (req, res) => {
  const { TravelUuid, UserUuid } = req.body;
  try {
    const likes = await Like.create({
      TravelUuid,
      UserUuid,
    });
    res.status(201).json(likes);
  } catch (err) {
    res.status(422).json(err);
  }
});

likes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Like.destroy({ where: { id } });
    res.status(204).send("Votre like a été supprimé");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = likes;
