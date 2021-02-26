import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import axios from "axios";

function ArticlePage({ match }) {
  const name = match.params.name;
  const [loading, setLoading] = useState(true);
  const article = articleContent.find((a) => a.name === name);

  const [articleMetaData, setArticleMetaData] = useState({
    upvotes: 0,
    comments: [],
    name: "",
  });

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function getArticle() {
      try {
        const response = await axios.get(`/api/articles/${name}`, {
          cancelToken: source.token,
        });

        setArticleMetaData(response.data);
      } catch (error) {
        console.error("Failed to fetch article", name, "metadata");
      }

      setLoading(false);
    }

    getArticle();

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (loading) return <p>Loading article...</p>;
  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter((a) => a.name !== name);

  return (
    <>
      <h1>{article.name}</h1>
      <h3>{articleMetaData.upvotes} upvotes</h3>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <CommentsList comments={articleMetaData.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
