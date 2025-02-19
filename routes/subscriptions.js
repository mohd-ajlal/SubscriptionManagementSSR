const express = require("express");
const router = express.Router();
const Subscription = require("../models/subscription");


router.get("/", async (req, res) => {
  const subscriptions = await Subscription.find();
  res.render("index", { subscriptions });
});


router.get("/new", (req, res) => {
  res.render("new");
});


router.post("/", async (req, res) => {
  const { plan, cost, startDate, endDate } = req.body;
  await Subscription.create({ plan, cost, startDate, endDate });
  res.redirect("/subscriptions");
});


router.get("/:id", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);
  res.render("show", { subscription });
});


router.get("/:id/edit", async (req, res) => {
  const subscription = await Subscription.findById(req.params.id);
  res.render("edit", { subscription });
});


router.put("/:id", async (req, res) => {
  const { cost, startDate, endDate } = req.body;
  await Subscription.findByIdAndUpdate(req.params.id, { cost, startDate, endDate });
  res.redirect(`/subscriptions/${req.params.id}`);
});


router.delete("/:id", async (req, res) => {
  await Subscription.findByIdAndDelete(req.params.id);
  res.redirect("/subscriptions");
});

module.exports = router;
