import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
=======
import Navbar from "./components/Navbar/Navbar";
>>>>>>> 7af9c2d53f498ed5c2ab38ddc33b3f6ba9f79a9f
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/index/index";
import Account from "./pages/account/account";
import Calendar from "./pages/calendar/calendar";
import Contact from "./pages/contact";
import ManageUsers from "./pages/manageUsers";
import AddStudent from "./pages/addstudent";
<<<<<<< HEAD
=======
import TeachersProfiles from "./pages/teachersProfiles";
import StudentProfiles from "./pages/studentProfiles";
import Unenrollment from "./pages/unenrollment";
import AccessCodes from "./pages/accessCodes";


>>>>>>> 7af9c2d53f498ed5c2ab38ddc33b3f6ba9f79a9f

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
<<<<<<< HEAD
=======
        <Route path="/unenrollment" element={<Unenrollment />} />
        <Route path="/studentProfiles" element={<StudentProfiles />} />
        <Route path="/teachersProfiles" element={<TeachersProfiles />} />
        <Route path="/accessCodes" element={<AccessCodes />} />

>>>>>>> 7af9c2d53f498ed5c2ab38ddc33b3f6ba9f79a9f
      </Routes>
    </Router>
  );
}

export default App;
