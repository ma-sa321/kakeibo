import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {register, handleSubmit} = useForm();

  const [data, setData] = useState([
    {
      mode: "expense",
      name: "ごはんだよ",
      category: "ごはん"
    },
    {
      mode: "expense",
      name: "ごはん2",
      category: "ごはん"
    },
    {
      mode: "expense",
      name: "ごはん3",
      category: "ごはん"
    }
  ]);

  const [count, setCount] = useState(1);

  // const onSubmit = (data: any) => setList((list) => ([...list, data.title]));
  function onSubmit(item: any) {
    setCount(count + 1);
    setData((data) => [...data, item]);
    console.log(data);
  };

  useEffect(() => {
    setData((data) => [...data, ])
  },[])


  return (
    <>
      <div>hoge</div>
      <div>{count}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="mode" {...register('mode')} />
        <input type="text" id="title" {...register('title')}/>
        <input type="text" id="category" {...register('category')} />
        <input type="submit" /> 
      </form>
      <List data={data}/>
    </>
  );
}

function List(props: any) {
  const {data} = props;
  return (
    <table>
        <tbody>
        <tr><th>名前</th></tr>
        {data.map((item: any) => {
          return (
            <tr>
              <td>{item.name}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
  )
}
export default Home;