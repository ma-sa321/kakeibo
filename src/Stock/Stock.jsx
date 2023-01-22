import { useState } from "react";
import { useForm } from "react-hook-form";

const Stock = (props) => {
  const { stock, onCheck } = props;

  const handleChange = () => {
    if (window.confirm("削除しますか？")) {
      onCheck(stock);
    }
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={stock.delete}
            onChange={handleChange}
          />
          <span>{stock.name}</span>
        </label>
      </div>
    </>
  );
};
export default Stock;
