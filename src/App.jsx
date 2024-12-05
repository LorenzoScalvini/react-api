import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import style from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3017/posts")
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
        const allTags = new Set(response.data.flatMap((post) => post.tags));
        setTags([...allTags]);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
      });
  }, []);

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    if (tag === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  return (
    <div className={style.app}>
      <Header />
      <h1 className={style.title}>Link's Storyline</h1>
      <div className={style.filter}>
        <label htmlFor="tagFilter">Filtra per tag: </label>
        <select
          id="tagFilter"
          value={selectedTag}
          onChange={handleTagChange}
          className={style.select}
        >
          <option value="">Tutti</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className={style.cardsContainer}>
        {filteredPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
