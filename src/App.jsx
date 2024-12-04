import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import style from "./App.module.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3017/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
      });
  }, []);

  return (
    <div className={style.app}>
      <h1 className={style.title}>Lista dei Post</h1>
      <div className={style.cardsContainer}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
