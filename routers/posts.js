import postController from "../controllers/postController.js";
import express from "express";

const postRouter = express.Router();

/**
 * CRUD Opp:
 * 
 * 
 */

// Index -> Get (prende anche le query string param)
postRouter.get("/", postController.index)

// Show -> Get
postRouter.get("/:id", postController.show)

// Store -> Post
postRouter.post("/", postController.store)

// Update -> Put
postRouter.put("/:id", postController.update)

// Modify -> Patch
postRouter.patch("/:id", postController.modify)

 // Destroy -> Delete
postRouter.delete("/:id", postController.destroy)


export default postRouter;