import express from "express";
import postRouter from "./routers/posts.js";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Express-blog-api-crud in ascolto sulla porta ${port}`);
});
