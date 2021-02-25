import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";

function ArticlesList() {
  return (
    <>
      <h1>Articles</h1>
      {articleContent.map((article, idx) => (
        <Link
          className="article-list-item"
          to={`/articles/${article.name}`}
          key={idx}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].slice(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}

export default ArticlesList;
