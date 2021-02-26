import React, { useState, useEffect } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

function AddCommentForm({ articleName, setArticleMetaData }) {
  const [comment, setComment] = useState({
    username: "",
    text: "",
  });

  useEffect(() => {
    return () => {
      source.cancel();
    };
  }, []);

  function changeHandler(event) {
    setComment((prevComment) => ({
      ...prevComment,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    const response = await axios.post(
      `/api/articles/${articleName}/add-comment`,
      comment,
      {
        cancelToken: source.token,
      }
    );

    setArticleMetaData(response.data);
  }

  return (
    <form id="add-comment-form" onSubmit={submitHandler}>
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          value={comment.username}
          onChange={changeHandler}
          type="text"
          name="username"
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment.text}
          onChange={changeHandler}
          rows="4"
          cols="50"
          name="text"
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddCommentForm;
