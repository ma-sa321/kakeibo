import { useState } from "react";
import { useForm } from "react-hook-form";
import { EXPENSES } from "../const";

const Kakeibo = () => {
  const [data, setData] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (value) => {
    if (!value.title) return;
    setData([
      ...data,
      {
        key: getKey(),
        title: value.title,
        money: value.money,
        expenses: value.expenses,
      },
    ]);
    reset();
  };

  const getKey = () => Math.random().toString(32).substring(2);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          タイトル
          <input type="text" {...register("title")} />
        </div>
        <div>
          金額
          <input type="text" {...register("money")} />
        </div>
        <select {...register("expenses")}>
          {EXPENSES.map((expense) => {
            return <option value={expense.value}>{expense.label}</option>;
          })}
        </select>
        <button type="submit">登録</button>
      </form>
      {data.map((value) => {
        return (
          <>
            <div key={value.key}>
              {value.title} / ¥{value.money}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Kakeibo;
