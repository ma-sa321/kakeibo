import { useState } from "react";
import { useForm } from "react-hook-form";
import "bulma/css/bulma.css";
import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";

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
      <tr className="table">
        <td>
          <IconContext.Provider value={{ size: "30px" }}>
            <MdDelete onClick={deleteStock} />
          </IconContext.Provider>
        </td>
        <td>
          <span>{stock.name}</span>
        </td>
        <td>
          <span>{stock.stock}</span>
        </td>

        <button className="button is-light" onClick={countDown}>
          -1
        </button>
        <button className="button is-light" onClick={countUp}>
          +1
        </button>
      </tr>
    </>
  );
};
export default Stock;
