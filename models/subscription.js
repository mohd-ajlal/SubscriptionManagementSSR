const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  plan: { type: String, required: true, trim: true },
  cost: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
