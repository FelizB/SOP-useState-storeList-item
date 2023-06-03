import React, { useState } from "react";

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
          {Litems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
