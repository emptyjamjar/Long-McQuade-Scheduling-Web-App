import React from "react";
import Header from "../components/Header";


interface Profile {
  firstName: string;
  lastName: string;
  address: string;
  postCode: string;
  email: string;
  instrumentsPlayed: string;
  experience: string;
  yearOfBirth: string;
}


const someProfiles: Profile[] = [
  {
    firstName: "Rhapsody",
    lastName: "Ruth",
    address: "800 Broadway St",
    postCode: "ABC 123",
    email: "RhaspsodyRuth@gmail.com",
    instrumentsPlayed: "None",
    experience: "0 years",
    yearOfBirth: "1954",
  },
  {
    firstName: "Strumming",
    lastName: "Sam",
    address: "456 4th St",
    postCode: "ABC 124",
    email: "StrummingSam@gmail.com",
    instrumentsPlayed: "Guitar",
    experience: "8 years",
    yearOfBirth: "2002",
  },
  
];


const StudentProfile: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div id="teachersProfiles">
      <Header message="Student Profile" name="" />
      </div>
      {someProfiles.map((profile, index) => (
        <ProfileBox key={index} profile={profile} />
      ))}
    </div>
  );
};


const ProfileBox: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", margin: "20px" }}>
      <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
      <p>Address: {profile.address}</p>
      <p>Postal Code: {profile.postCode}</p>
      <p>Email: {profile.email}</p>
      <p>Instruments Played: {profile.instrumentsPlayed}</p>
      <p>Experience: {profile.experience}</p>
      <p>Year of Birth: {profile.yearOfBirth}</p>
    </div>
  );
};

export default StudentProfile;
