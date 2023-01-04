const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipes-controller");

router.get("/", recipesController.getAllRecipes);
// This route will get all recipes from the database.

router.post("/", recipesController.addRecipe);
// This route will add a new recipe to the database.

router.get("/:id", recipesController.getById);
// This will get single recipes by id

router.put("/:id", recipesController.updateRecipe);
// This will update the recipe of the given id

module.exports = router;
