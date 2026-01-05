import dataPost from "../src/dataPosts.js";
import express from "express";

const postRouter = express.Router();

/**
 * CRUD Opp:
 * 
 * 
 */

// Index -> Get (prende anche le query string param)
postRouter.get("/", (req,res) => {

   const {titolo, contenuto, tags} = req.query;
   // console.log(`id: ${id}`);
   // console.log(`contenuto: ${contenuto}`);
   // console.log(`immagine: ${immagine}`);
   // console.log(`tags: ${tags}`);
   // console.log(`titolo: ${titolo}`);
   
   let filteredPost = dataPost;
   
   if(titolo !== undefined){
      filteredPost = filteredPost.filter((curPost)=> curPost.titolo.toLowerCase().includes(titolo.toLowerCase()))
   }
   
   if(contenuto !== undefined){
      filteredPost = filteredPost.filter((curPost)=> curPost.contenuto.toLowerCase().includes(contenuto.toLowerCase()))
   }
   
   // if(tags !== undefined){
   //    filteredPost = filteredPost.filter((curPost)=> curPost.tags.filter((curTag) => {curTag.toLowerCase().includes(tags)}))
   // }
   
   const dataResponse = {
      "info" : {
         "lenght" : filteredPost.length,
      },
      "data" : {
         "posts" : filteredPost,
      }
   }

   res.json(dataResponse)
 })

// Show -> Get
postRouter.get("/:id", (req, res) => {
   const id = parseInt(req.params.id);
   const dataResponse = dataPost.find((curPost) => curPost.id === id)

   if(!dataResponse){
      res.status(404)
      res.json({
         "error" : "Not Found",
         "message" : "Post non trovato"
      })
   } else{
      res.json(dataResponse)
   }

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