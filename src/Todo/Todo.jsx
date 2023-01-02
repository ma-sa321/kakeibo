import { useState } from "react";
import { useForm } from "react-hook-form";


const Todo = (props) => {
  const { todo, onCheck } = props;

  const handleChange = () => {
    onCheck(todo);
  }

  return (
    <>
      <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
        />
        <span>
          {todo.name}
        </span>
      </label>
    </>
  )
  
}
export default Todo;