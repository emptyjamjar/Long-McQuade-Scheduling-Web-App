import Header from "../components/Header";
import React from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const Unenrollment: React.FC = () => {
  const handleSearch = (query: string) => {
    return;
  };

  return (
    <div style={{ width: "100vw" }}>
      <div id="Unenrollment">
        <Header message="Unenrollment" name="" />
      </div>
      
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <SearchBar onSearch={handleSearch} />
      <Button color="primary" onClick={() => {}}>
        Unenroll
      </Button>
    </div>
    </div>
  );
};

export default Unenrollment;
