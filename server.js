const express = require("express");
const path = require("path");
const ShortUrl = require("./models/shortUrl");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "./public");

app.use(express.static(static_path));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(port);
