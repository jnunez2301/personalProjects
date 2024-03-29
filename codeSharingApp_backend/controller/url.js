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

router.post("/", (req, res) => {
  const body = req.body;
  const newURL = new UrlSchema({
    generatedUrl: body.generatedUrl,
    code: body.code,
  });

  newURL
    .save()
    .then((savedURL) => {
      res.status(201).json(savedURL);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ msg: "Malformed JSON make sure all field are in" });
    });
});

router.put("/", (req, res) => {
  const body = req.body;

  UrlSchema.findOneAndUpdate({ generatedUrl: body.generatedUrl }, body, {
    new: true,
  })
    .then((updatedURL) => {
      if (!updatedURL) {
        return res.status(404).json({ msg: "URL not found" });
      }
      res.status(200).json(updatedURL);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    });
});

module.exports = router;
