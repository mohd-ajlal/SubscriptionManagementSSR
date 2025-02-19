const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;


mongoose.connect("mongodb://localhost:27017/subscriptionDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));


const subscriptionRoutes = require("./routes/subscriptions");
app.use("/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
  res.redirect("/subscriptions");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
