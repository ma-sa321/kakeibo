import { useState } from "react";
import { useForm } from "react-hook-form";

const InputStock = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    if (!value.name) return;
    props.onAdd(value.name);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">登録</button>
      </form>
    </>
  );
};
export default InputStock;
