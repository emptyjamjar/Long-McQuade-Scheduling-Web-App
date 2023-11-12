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
import TeachersProfiles from "./pages/teachersProfiles";
import StudentProfiles from "./pages/studentProfiles";
import Unenrollment from "./pages/unenrollment";
import AccessCodes from "./pages/accessCodes";



/* 
  The main application for all components 
  TODO: need to make all pages responsive.
*/
function App() {
  return (
    <Router>
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
        <Route path="/teachersProfiles" element={<TeachersProfiles />} />
        <Route path="/accessCodes" element={<AccessCodes />} />

      </Routes>
    </Router>
  );
}

export default App;
