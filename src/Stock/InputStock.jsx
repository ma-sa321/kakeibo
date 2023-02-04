import { useState } from "react";
import { useForm } from "react-hook-form";
import "bulma/css/bulma.css";

const InputStock = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    if (!value.name) return;
    props.onAdd(value.name);
  };

  return (
    <>
      <form className="input-stock" onSubmit={handleSubmit(onSubmit)}>
        <input className="input" type="text" {...register("name")} />
        <button className="button is-info" type="submit">
          登録
        </button>
      </form>
    </>
  );
};
export default InputStock;
