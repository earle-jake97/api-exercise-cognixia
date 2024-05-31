import express, {Request, Response, Router} from "express";
import path from "path";
import Recipe from "../models/recipe";
import recipes from "../db/db";

const router = Router();

let maxId = 2;

router.use(express.static(path.join(__dirname, "static")));

// Get a recipe by its ID
router.get("/:id", (req:Request, res:Response) => {
      const recipe = recipes.filter((aRecipe) => aRecipe.id === +req.params.id)
      if(recipe.length === 1){
            res.json(recipe);
      } else {
            res.json(res.status(404).json("This recipe ID does not exist"));
      }
});

// Get all recipes
router.get("/", (req:Request, res:Response) => {
      res.json(recipes);
});

// Add a new recipe
router.post("/", (req:Request, res:Response) => {

      console.log(req.body)

      const recipe: Recipe = {
            id: ++maxId,
            name: req.body.name,
            calories: req.body.calories,
            prepTime: req.body.prepTime,
            imgUrl: req.body.imgUrl
      }
      recipes.push(recipe);
      res.status(201).json(recipes);
});

// Update with body
router.patch("/:id", (req:Request, res:Response) => {
      const recipe = recipes.find(aRecipe => aRecipe.id === +req.params?.id)
      if(recipe) {
            if(req.body.name) {
                  recipe.name = req.body.name;
            }
            if (req.body.calories) {
                  recipe.calories = req.body.calories;
            }
            if (req.body.prepTime){
                  recipe.prepTime = req.body.prepTime;
            }
            if (req.body.imgUrl){
                  recipe.imgUrl = req.body.imgUrl;
            }

            res.status(200).json(recipes);
      } else {
            res.status(404).json("This recipe ID does not exist");
      }
});

// Delete by ID
router.delete("/:id", (req:Request, res:Response) => {
      const recipe = recipes.findIndex(aRecipe => aRecipe.id === +req.params?.id);
      if(recipe !== -1){
            recipes.splice(recipe, 1);
            res.status(200).json(recipes);
      } else {
            res.status(404).json("This recipe ID does not exist");
      }
});

export default router;