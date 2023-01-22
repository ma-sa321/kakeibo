import { useState } from "react";
import InputStock from "./InputStock";
import Stock from "./Stock";

const StockTop = () => {
  const [stock, setStock] = useState([]);
  const getKey = () => Math.random().toString(32).substring(2);

  const handleAdd = (text) => {
    setStock([...stock, { key: getKey(), name: text, delete: false }]);
  };

  const handleCheck = (checked) => {
    const checkStatus = stock.map((stock) => {
      if (stock.key === checked.key) {
        stock.delete = !stock.delete;
      }
      return stock;
    });
    setStock(checkStatus);
  };

  return (
    <>
      <InputStock onAdd={handleAdd} />
      {stock.map((data) => {
        if (data.delete == false) {
          return <Stock key={data.key} stock={data} onCheck={handleCheck} />;
        }
      })}
    </>
  );
};
export default StockTop;
