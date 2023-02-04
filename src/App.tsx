import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo/TodoTop";
import Kakeibo from "./Kakeibo/Kakeibo";
import Stock from "./Stock/StockTop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/kakeibo`} element={<Stock />} />
        <Route path={`/todo`} element={<Todo />} />
        <Route path={`/kakeibo2`} element={<Kakeibo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;