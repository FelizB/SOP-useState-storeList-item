import React from "react";

function TodoItems(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.it}</li>
    </div>
  );
}
export default TodoItems;
