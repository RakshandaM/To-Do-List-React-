import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [items, setItems] = useState([]); //item to be added ind array

  function handleChange(event) {
    const newValue = event.target.value; //only one value
    setInputText(newValue);
  }

  function addItem() {
    setItems((preValue) => {
      return [...preValue, inputText];
    });
    setInputText(""); // CLEAR CURRENT VALUE
  } //new value

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItems) => (
            <li>{toDoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
