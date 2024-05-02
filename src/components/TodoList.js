import React from "react";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.listItem}
      <span className="icons">
        <i
          className="fa-regular fa-trash-can icon-delete"
          onClick={() => {
            props.deleteListItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
