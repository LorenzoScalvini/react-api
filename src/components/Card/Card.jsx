import React from "react";
import style from "./Card.module.css";

const Card = ({ post }) => {
  return (
    <div className={style.card}>
      <img
        src={`http://localhost:3017/images/${post.image}`}
        alt={post.title}
        className={style.cardImage}
      />
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{post.title}</h2>
        <p className={style.cardDescription}>{post.content}</p>
        <div className={style.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={style.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
