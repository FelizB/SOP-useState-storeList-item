import React, { useState } from "react";
import ToDoItems from "./toDo";

function App() {
  const [items, updateItems] = useState("");
  const [Litems, updateLitems] = useState([]);

  function pass(event) {
    const obj = event.target.value;
    updateItems(obj);
  }
  function updatelist() {
    updateLitems((preItems) => {
      return [...preItems, items];
    });
    updateItems("");
  }

  function deleteItem(id) {
    updateLitems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={pass} name="item" type="text" />
        <button onClick={updatelist}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Litems.map((item, index) => {
            return <ToDoItems key={index} it={item} onChecked={deleteItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
