import { useEffect, useState } from "react";
import InputStock from "./InputStock";
import Stock from "./Stock";
import "bulma/css/bulma.css";
import "./Stock.scss";

const StockTop = () => {
  const [stock, setStock] = useState([]);
  const getKey = () => Math.random().toString(32).substring(2);

  /** リロード後の初期取得のみ */
  // []に値入れて更新してもいいけど、再読み込みがずっとループするからダメ
  useEffect(() => {
    setStock(JSON.parse(localStorage.getItem("stock")));
  }, []);

  /** 登録 */
  const handleAdd = (name) => {
    if (!name) return;

    // localStorageがnullの場合、...stockがnullを許容出来ないので無理やりやっている
    // TODO: リファクタリング
    if (stock) {
      var inputData = [
        ...stock,
        { key: getKey(), name: name, stock: 1, isDelete: false },
      ];
    } else {
      var inputData = [
        { key: getKey(), name: name, stock: 1, isDelete: false },
      ];
    }

    setLocalStorage(inputData);
  };

  /** 更新 */
  const handleUpdate = (updateStock) => {
    const updateData = stock.map((stock) => {
      if (stock.key === updateStock.key) {
        stock = updateStock;
      }
      return stock;
    });
    setLocalStorage(updateData);
  };

  /** ローカルストレージ反映 */
  const setLocalStorage = (stock) => {
    setStock(stock);
    var setJson = JSON.stringify(stock);
    localStorage.setItem("stock", setJson);
  };

  return (
    <div class="body">
      <InputStock onAdd={handleAdd} />
      <table className="table">
        <thead>
          <tr>
            <th>削除</th>
            <th>名称</th>
            <th>残数</th>
          </tr>
        </thead>
        <tbody>
          {stock
            ? stock.map((data) => {
                if (data.isDelete == false) {
                  return (
                    <Stock
                      key={data.key}
                      prevStock={data}
                      onChange={handleUpdate}
                    />
                  );
                }
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default StockTop;
