const express = require("express");
const travels = express.Router();
const Travel = require("../models/travel.model");
const User = require("../models/user.model");

travels.get("/", async (req, res) => {
  try {
    const travels = await Post.findAll({ include: [{ model: User }] });
    res.status(200).json(travels);
  } catch (err) {
    res.status(400).json(err);
  }
});

travels.post("/", async (req, res) => {
  const { content, UserUuid, imageUrl, title, localisation } = req.body;
  try {
    const travels = await Travel.create({
      content,
      UserUuid,
      imageUrl,
      title,
      localisation,
    });
    res.status(201).json(travels);
  } catch (err) {
    res.status(422).json(err);
  }
});

travels.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    await Travel.destroy({ where: { uuid } });
    res.status(204).send("Votre travel a été supprimé");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = travels;
