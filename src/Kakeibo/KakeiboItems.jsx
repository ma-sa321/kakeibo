import { useContext } from "react";
import { DataContext } from "./Kakeibo";

/**
 * 家計簿の表示部分
 */
const KakeiboItems = () => {
  const { data, setData } = useContext(DataContext);
  const deleteCheck = (checkedItem) => {
    const deleteItem = data.map((item) => {
      if (item.key === checkedItem.key) {
        item.isDelete = !item.isDelete;
      }
      return item;
    });
    setData(deleteItem);
    var setJson = JSON.stringify(data);
    localStorage.setItem("kakeibo", setJson);
  };

  return (
    <>
      <div>hoge</div>
    </>
  );
  // return data.map((item) => {
  //   return <KakeiboItem key={item.key} item={item} onChange={deleteCheck} />;
  // });
};

const KakeiboItem = ({ item, onChange }) => {
  const handleChange = () => {
    onChange(item);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={item.isDelete}
          onChange={handleChange}
        />
        <span>{item.title}</span>
      </div>
    </>
  );
};
export default KakeiboItems;
