const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  })
});


router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    req.body.burger_name, 
    function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = req.params.id;

  burger.updateOne(
    req.body.devoured, condition, 
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});

module.exports = router;