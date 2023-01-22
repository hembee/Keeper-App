import React from 'react'
import Note from "./Note";
const Notes = ({note, remove}) => {
  return (
    <div className="notes">
      {note.map((note, index) => {
        return (
          <Note key={index} id={index} title={note.title} content={note.content} onClick={remove} />
        );
      })}
    </div>
  );
}

export default Notes
