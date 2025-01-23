import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "./App.css";

import Login from "./pages/Login/Login";
import AdminPage from "./pages/AdminPage/AdminPage";
import StudentPage from "./pages/StudentPage/StudentPage";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/StudentPage" element={<StudentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
