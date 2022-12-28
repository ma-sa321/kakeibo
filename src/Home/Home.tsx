const Home = () => {
  const data = [
    {
      id: 1,
      mode: "expense",
      name: "ごはん",
      category: "ごはん"
    },
    {
      id: 2,
      mode: "expense",
      name: "ごはん2",
      category: "ごはん"
    },
    {
      id: 3,
      mode: "expense",
      name: "ごはん3",
      category: "ごはん"
    }
  ]
  return (
    <>
      <div>hoge</div>
      <table>
        <tr><th>名前</th></tr>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
            </tr>
          )
        })}
      </table>
    </>
  );
}
export default Home;