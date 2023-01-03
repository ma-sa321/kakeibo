import { useEffect, useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { EXPENSES } from "../const";
import KakeiboItems from "../KakeiboItems/KakeiboItems";

export const DataContext = createContext();

/**
 * 家計簿画面の全体
 */
const Kakeibo = () => {
  const [data, setData] = useState([]);
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
        <KakeiboItems />
      </DataContext.Provider>
    </>
  );
};
export default Kakeibo;
