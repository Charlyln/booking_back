const express = require("express");
const travels = express.Router();
const Travel = require("../models/travel.model");
const User = require("../models/user.model");
const Likes = require("../models/like.model");
const Booking = require("../models/booking.model");

travels.get("/", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      include: [
        { model: User },
        { model: Likes },
        {
          model: Booking,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(400).json(err);
  }
});

travels.get("/:UserUuid", async (req, res) => {
  const UserUuid = req.params.UserUuid;
  try {
    const travels = await Travel.findAll({
      include: [
        { model: User },
        { model: Likes },
        {
          model: Booking,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
      where: { UserUuid },
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(400).json(err);
  }
});

//

travels.post("/", async (req, res) => {
  const {
    content,
    UserUuid,
    imageUrl,
    title,
    localisation,
    description,
  } = req.body;
  try {
    const travels = await Travel.create({
      content,
      UserUuid,
      imageUrl,
      title,
      localisation,
      description,
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
