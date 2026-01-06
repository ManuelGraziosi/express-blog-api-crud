import dataPost from "../src/dataPosts.js";

const index = (req, res) => {
  const { titolo, contenuto, tags } = req.query;
  // console.log(`id: ${id}`);
  // console.log(`contenuto: ${contenuto}`);
  // console.log(`immagine: ${immagine}`);
  // console.log(`tags: ${tags}`);
  // console.log(`titolo: ${titolo}`);

  let filteredPost = dataPost;

  if (titolo !== undefined) {
    filteredPost = filteredPost.filter((curPost) =>
      curPost.titolo.toLowerCase().includes(titolo.toLowerCase())
    );
  }

  if (contenuto !== undefined) {
    filteredPost = filteredPost.filter((curPost) =>
      curPost.contenuto.toLowerCase().includes(contenuto.toLowerCase())
    );
  }

  // if(tags !== undefined){
  //    filteredPost = filteredPost.filter((curPost)=> curPost.tags.filter((curTag) => {curTag.toLowerCase().includes(tags)}))
  // }

  const dataResponse = {
    info: {
      lenght: filteredPost.length,
    },
    data: {
      posts: filteredPost,
    },
  };

  res.json(dataResponse);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const dataResponse = dataPost.find((curPost) => curPost.id === id);

  if (!dataResponse) {
    res.status(404);
    res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  } else {
    res.json(dataResponse);
  }
};

const store = (req, res) => {
  const newPostData = req.body;

  const lastIndexElemID = dataPost[dataPost.length - 1].id;
  const newID = lastIndexElemID + 1;
  const newPost = {
    id: newID,
    ...newPostData,
  };
  dataPost.push(newPost);

  res.status(201);
  res.json(newPost);
};

const update = (req, res) => {
  const { id } = req.params;
  res.send(`Aggiorno completamente Post: ${id}`);
};

const modify = (req, res) => {
  const { id } = req.params;
  res.send(`Aggiorno parzialmente Post: ${id}`);
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  //Trovare il post cercato se esiste
  const post = dataPost.find((curPost) => curPost.id === id);

  if (post === undefined) {
    res.status(404);
    res.json({
      err: "Not Found",
      message: "Post non trovato",
    });
  } else {
    dataPost.splice(dataPost.indexOf(post), 1);
    res.sendStatus(204);
  }
};

export default { index, show, store, update, modify, destroy };
