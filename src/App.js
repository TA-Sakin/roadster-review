import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/review" element={<Review></Review>}>
          Review
        </Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          Home
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}>
          Home
        </Route>
        <Route path="/about" element={<About></About>}>
          Home
        </Route>
      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
