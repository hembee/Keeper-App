import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.onClick(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p className="delete" onClick={deleteNote}>
        🗑
      </p>
    </div>
  );
};

export default Note;
