import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), todo: "Go to the store" },
    { id: uuidv4(), todo: "Take out the trash" },
    { id: uuidv4(), todo: "Drive to Lake Tahoe" },
  ]);
  //   add item to the todo list
  const addItem = (todo) => {
    setTodoList([...todoList, { id: uuidv4(), todo }]);
  };

  //   delete item to the todo list
  const deleteItem = (e) => {
    // delete state
    setTodoList(
      todoList.filter(
        // check if item id is not equal to event target id
        (item) => item.id !== e.target.previousSibling.getAttribute("id")
      )
    );
  };

  //   update item
  const updateItem = (e) => {
    alert("clickd");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addItem={addItem} />
      <div>
        {todoList.map((todo) => {
          return (
            <Todo
              todo={todo.todo}
              key={todo.id}
              id={todo.id}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
