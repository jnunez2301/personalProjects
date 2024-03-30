const express = require("express");
const router = express.Router();
const UrlSchema = require("../models/UrlSchema");

router.get("/", (req, res) => {
  UrlSchema.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ msg: "Could not fetch data" });
    });
});

router.get("/:idParam", (req, res) => {
  UrlSchema.find({ generatedUrl: req.params.idParam })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(404).json({ msg: "id does not exist" }));
});

router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    let existingURL = await UrlSchema.findOne({ generatedUrl: body.generatedUrl });

    if (existingURL) {
      // If the generatedUrl already exists, update it
      existingURL.code = body.code;
      existingURL.languageOptions = body.languageOptions;

      existingURL = await existingURL.save();
      res.status(200).json(existingURL); // 200 for successful update
    } else {
      // If the generatedUrl does not exist, create a new one
      const newURL = new UrlSchema({
        generatedUrl: body.generatedUrl,
        code: body.code,
        languageOptions: body.languageOptions
      });

      const savedURL = await newURL.save();
      res.status(201).json(savedURL); // 201 for successful creation
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Malformed JSON, make sure all fields are included." });
  }
});

module.exports = router;
