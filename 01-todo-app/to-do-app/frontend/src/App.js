import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/HomePage";
import TodoList from "./pages/Todos/TodoList";
import{Toaster} from "react-hot-toast";

function App() {
  return (
    <div >
      <Routes>  
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
