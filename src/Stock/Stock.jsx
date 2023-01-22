import { useState } from "react";
import { useForm } from "react-hook-form";

const Stock = (props) => {
  const { prevStock, onChange } = props;
  const [stock, setStock] = useState(prevStock);

  const deleteStock = () => {
    if (window.confirm("削除しますか？")) {
      setStock((prevStock) => ({ ...prevStock, isDelete: true }));
      onChange(stock);
    }
  };

  const countUp = () => {
    setStock((prevStock) => ({ ...prevStock, stock: stock.stock + 1 }));
    onChange(stock);
  };

  const countDown = () => {
    setStock((prevStock) => ({ ...prevStock, stock: stock.stock - 1 }));
    onChange(stock);
  };

  return (
    <>
      <div>
        <label>
          <button onClick={deleteStock}>削除</button>
          <span>{stock.name}</span>
          <span> /残 : {stock.stock}</span>
        </label>
        <button onClick={countUp}>+1</button>
        <button onClick={countDown}>-1</button>
      </div>
    </>
  );
};
export default Stock;
