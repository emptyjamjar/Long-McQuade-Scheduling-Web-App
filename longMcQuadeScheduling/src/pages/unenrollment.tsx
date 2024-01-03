import React, { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const Unenrollment: React.FC = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [studentName, setStudentName] = useState('');

  const username = "A1";
  const password = "admin";

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      alert("Please enter a student number to search.");
      return;
    }

    const apiEndpoint = `http://localhost:1919/users/students/${query}`;
    
    try {
      const response = await axios.get(apiEndpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`
        },
      });

      if (response.data && response.data.firstName && response.data.lastName) {
        setStudentNumber(query);
        const fullName = `${response.data.firstName} ${response.data.lastName}`;
        setStudentName(fullName);
        alert(`Student found: ${fullName}`);
      } else {
        alert("Student not found. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Student not found. Please try again.");
    }
  };

  const handleUnenroll = async () => {
    if (!studentNumber) {
      alert("Please search for a student first.");
      return;
    }

    try {
      await axios.delete(`http://localhost:1919/users/students/deletestudent/${studentNumber}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`
        },
      });
      alert("Student successfully unenrolled.");
      setStudentNumber('');
      setStudentName('');
    } catch (error) {
      console.error("Error:", error);
      alert("Error unenrolling student. Please try again.");
    }
  };

  return (
    <div style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <div id="Unenrollment">
        <Header message="Unenrollment" name="" />
      </div>
      
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "20px" }}>
        <SearchBar onSearch={handleSearch} value={studentName} />
        <Button color="primary" onClick={handleUnenroll}>
          Unenroll
        </Button>
      </div>
    </div>
  );
};

export default Unenrollment;
