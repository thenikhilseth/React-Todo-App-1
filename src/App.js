import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteItem = (index) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((item, index) => {
          return (
            <TodoList
              listItem={item}
              key={index}
              index={index}
              deleteListItem={deleteItem}
            />
          );
        })}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
