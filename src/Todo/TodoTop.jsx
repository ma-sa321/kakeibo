import { useState } from "react";
import InputTodo from "./InputTodo";
import Todo from "./Todo";

const TodoTop = () => {
  const [todo, setTodo] = useState([]);
  const getKey = () => Math.random().toString(32).substring(2);

  const handleAdd = (text) => {
    setTodo([...todo, { key: getKey(), name: text, done: false }]);
  };

  const handleCheck = (checked) => {
    const checkStatus = todo.map((todo) => {
      if (todo.key === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodo(checkStatus);
  };

  return (
    <>
      <InputTodo onAdd={handleAdd} />
      {todo.map((data) => {
        return <Todo key={data.key} todo={data} onCheck={handleCheck} />;
      })}
    </>
  );
};
export default TodoTop;
