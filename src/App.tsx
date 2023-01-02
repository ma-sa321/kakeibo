import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import TodoTop from "./TodoTop/TodoTop";
import Kakeibo from "./Kakeibo/Kakeibo"
// import Register from "./Register";
// import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/todo`} element={<TodoTop />} />
        <Route path={`/kakeibo`} element={<Kakeibo />} />
        <Route path={`/about/`} element={<About />} />
        <Route path={`/contact/`} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;