import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Header from "./components/Header";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";

function App() {
  const { dark } = useSelector((state) => state.site);
  const { auth } = useSelector((state) => state.auth);
  
  return (
    <div className="App">
      <div className={dark === true ? "dark" : ""}>
        <Header />
        <Counter />
        <CounterActions />
        <hr />
        <div>
          <Link to="/">-Home-</Link>
          <Link to="/about">-About-</Link>
          <Link to="/profile">-Profile-</Link>
          <Link to="/login">-Login-</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={auth ? <About /> : <Navigate to="/login" />}/>
          <Route
            path="/profile"
            element={auth ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
