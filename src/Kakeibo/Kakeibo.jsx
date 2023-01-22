import { useEffect, useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { EXPENSES } from "../const";
import KakeiboItems from "./KakeiboItems";
import NumberFormat from "react-number-format";

export const DataContext = createContext();

/**
 * 家計簿画面の全体
 */
const Kakeibo = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({ title: "", money: "" });
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("kakeibo")));
  }, []);

  /** 登録 */
  const onSubmit = (item) => {
    if (!item.title | !item.money) return;

    // localStorageがnullの場合、...dataがnullを許容出来ないので無理やりやっている
    // TODO: リファクタリング
    if (data) {
      var inputData = [
        ...data,
        {
          key: getKey(),
          title: item.title,
          money: item.money,
          expenses: item.expenses,
          isDelete: false,
        },
      ];
    } else {
      var inputData = [
        {
          key: getKey(),
          title: item.title,
          money: item.money,
          expenses: item.expenses,
          isDelete: false,
        },
      ];
    }

    setData(inputData);
    var setJson = JSON.stringify(inputData);
    localStorage.setItem("kakeibo", setJson);
    reset();
  };

  const getKey = () => Math.random().toString(32).substring(2);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <div>{item.title}</div>
        <div>{item.money}</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            タイトル
            <input
              type="text"
              value={item.title}
              {...register("title", {
                onChange: (e) =>
                  setItem({ title: e.target.value, money: item.money }),
              })}
            />
          </div>
          <div>
            金額
            <input
              type="text"
              value={item.money}
              {...register("money", {
                onChange: (e) =>
                  setItem({ title: item.title, money: e.target.value }),
              })}
            />
          </div>
          <select {...register("expenses")}>
            {EXPENSES.map((expense) => {
              return <option value={expense.value}>{expense.label}</option>;
            })}
          </select>
          <button type="submit">登録</button>
        </form>
        <KakeiboItems />
      </DataContext.Provider>
    </>
  );
};
export default Kakeibo;
