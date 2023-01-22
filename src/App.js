import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import notes from "./notes";
import Notes from "./components/Notes";

const App = () => {
  const [note, setNotes] = useState(notes);

  const submitHandler = (newCard) => {
    setNotes([...note, newCard]);
  };

  const deleteHandler = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <Form onSubmit={submitHandler} />
      <Notes note={note} remove={deleteHandler} />
      <Footer />
    </div>
  );
};

export default App;
