import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";

function ArticlePage({ match }) {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <h1>Article does not exist</h1>;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
