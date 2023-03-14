import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputItem, setInput] = useState({
    title: "",
    content: ""
  });

  const [items, setItem] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleDelete(id) {
    setItem((prevItem) => {
      return prevItem.filter((tasks, index) => {
        return index != id;
      });
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setItem((prevItem) => {
      return [...prevItem, inputItem];
    });
    setInput({ title: "", content: "" });
  }

  return (
    <div>
      <Header />
      <CreateArea
        changeFunc={handleChange}
        clickFunc={handleClick}
        inputItem={inputItem}
      />
      {items.map((tasks, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={tasks.title}
            content={tasks.content}
            handleDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
