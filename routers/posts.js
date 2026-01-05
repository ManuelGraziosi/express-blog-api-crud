import dataPost from "../src/dataPosts.js";
import express from "express";

const postRouter = express.Router();

/**
 * CRUD Opp:
 * 
 * 
 */

// Index -> Get
postRouter.get("/", (req,res) => {
    const dataResponse = {
      "info" : {
         "lenght" : dataPost.length,
      },
      "data" : {
         "posts" : dataPost,
      }
   }
   res.json(dataResponse)
 })

// Show -> Get
postRouter.get("/:id", (req, res) => {
   const {id} = req.params;
   res.send(`Singolo Post: ${id}`)
})

// Store -> Post
postRouter.post("/", (req, res) => {
   res.send(`Creo Post`)
})

// Update -> Put
postRouter.put("/:id", (req, res) => {
   const {id} = req.params;
   res.send(`Aggiorno completamente Post: ${id}`)
})

// Modify -> Patch
postRouter.patch("/:id", (req, res) => {
   const {id} = req.params;
   res.send(`Aggiorno parzialmente Post: ${id}`)
})

 // Destroy -> Delete
postRouter.delete("/:id", (req, res) => {
   const {id} = req.params;
   res.send(`Cancello Post: ${id}`)
})


export default postRouter;