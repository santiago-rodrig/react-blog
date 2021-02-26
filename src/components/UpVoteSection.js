import React, { useEffect } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

function UpVoteSection({ upvotes, articleName, setArticleMetaData }) {
  useEffect(() => {
    return () => {
      source.cancel();
    };
  }, []);

  async function upvoteArticle() {
    const response = await axios.post(`/api/articles/${articleName}/upvote`, {
      cancelToken: source.token,
    });
    setArticleMetaData(response.data);
  }

  return (
    <div id="upvotes-section">
      <button onClick={upvoteArticle}>Add Upvote</button>
      <h3>{upvotes} upvotes</h3>
    </div>
  );
}

export default UpVoteSection;
