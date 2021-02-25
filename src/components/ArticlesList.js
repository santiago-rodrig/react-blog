import React from "react";
import { Link } from "react-router-dom";

function ArticlesList({ articles }) {
  return articles.map((article, idx) => (
    <Link
      className="article-list-item"
      to={`/articles/${article.name}`}
      key={idx}
    >
      <h3>{article.title}</h3>
      <p>{article.content[0].slice(0, 150)}...</p>
    </Link>
  ));
}

export default ArticlesList;
