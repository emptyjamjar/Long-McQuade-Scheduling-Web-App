import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/index/index";
import Account from "./pages/account/account";
import Calendar from "./pages/calendar/calendar";
import Contact from "./pages/contact";
import ManageUsers from "./pages/manageUsers";
import AddStudent from "./pages/addstudent";
import Login from "./pages/login/login";
import TeachersProfiles from "./pages/teachersProfiles";
import StudentProfiles from "./pages/studentProfiles";
import Unenrollment from "./pages/unenrollment";
import AccessCodes from "./pages/accessCodes";

function App() {
  return (
    <Router>
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
        <Route path="/unenrollment" element={<Unenrollment />} />
        <Route path="/studentProfiles" element={<StudentProfiles />} />
        <Route
          path="/teachersProfiles"
          element={<TeachersProfiles names={""} intro={""} image={""} />}
        />
        <Route path="/accessCodes" element={<AccessCodes />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
