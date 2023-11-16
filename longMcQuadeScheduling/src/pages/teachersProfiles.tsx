import Header from "../components/Header";
import React from 'react';

interface TeacherProfileProp{
  names: string;
  intro: string;
  image: string;
}

const TeachersProfiles: React.FC<TeacherProfileProp>= ({ names, intro, image })=>{
  return <div style={{ width: "100vw" }}>
  <div id="teachersProfiles">
    <Header message="Teacher Profiles" name="" />
    
      <h2>{names}</h2>
      <p>{intro}</p>
      <img src={image} alt={`${names}'s profile`} />
    
  </div>
  
</div>
};

export default TeachersProfiles;
