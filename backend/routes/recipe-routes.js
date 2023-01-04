const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipes-controller");

router.get("/", recipesController.getAllRecipes);
// This route will get all recipes from the database.

module.exports = router;
