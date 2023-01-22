import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    const newCard = { title, content };
    e.preventDefault();

    onSubmit(newCard);

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Title"
        type="text"
        value={title}
        onChange={titleHandler}
      />
      <input
        placeholder="Content"
        type="text"
        value={content}
        onChange={contentHandler}
      />

      <button type="submit">+</button>
    </form>
  );
};

export default Form;
