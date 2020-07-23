const express = require("express");
const bookings = express.Router();
const Booking = require("../models/booking.model");
const User = require("../models/user.model");

bookings.get("/", async (req, res) => {
  try {
    const bookings = await Booking.findAll({ include: [{ model: User }] });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json(err);
  }
});

bookings.post("/", async (req, res) => {
  const { TravelUuid, UserUuid, startDate, endDate } = req.body;
  try {
    const bookings = await Booking.create({
      TravelUuid,
      UserUuid,
      startDate,
      endDate,
    });
    res.status(201).json(bookings);
  } catch (err) {
    res.status(422).json(err);
  }
});

bookings.put("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { TravelUuid, UserUuid, startDate, endDate, accepted } = req.body;
  try {
    const bookings = await Booking.update(
      {
        TravelUuid,
        UserUuid,
        startDate,
        endDate,
        accepted,
      },
      { where: { uuid } }
    );
    res.status(204).json(bookings);
  } catch (err) {
    res.status(422).json(err);
  }
});

bookings.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Booking.destroy({ where: { id } });
    res.status(204).send("Votre Booking a été supprimé");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = bookings;
