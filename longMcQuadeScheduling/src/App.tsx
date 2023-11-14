import "./App.css";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/index/index";
import Account from "./pages/account/account";
import Calendar from "./pages/calendar/calendar";
import Contact from "./pages/contact";
import ManageUsers from "./pages/manageUsers";
import AddStudent from "./pages/addstudent";
import Login from "./pages/login/login";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Home from "./pages/";
import Contact from "./pages/contact";
>>>>>>> d69c25dc (Routed application and created /pages)

function App() {
  return (
    <Router>
<<<<<<< HEAD
<<<<<<< HEAD
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
}

function PrivateRoutes() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/addstudent" element={<AddStudent />} />
      </Routes>
    </>
=======
=======
      <Header />
>>>>>>> 2f22d78d (Fixed App.tsx and Index.tsx)
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
>>>>>>> d69c25dc (Routed application and created /pages)
  );
}

export default App;
