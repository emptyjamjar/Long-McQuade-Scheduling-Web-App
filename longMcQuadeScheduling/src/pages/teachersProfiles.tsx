import React from "react";
import Header from "../components/Header";



interface TeacherProfile {
  name: string;
  instrument: string;
  bio: string;
}

const someTeachers: TeacherProfile[] = [
  {
    name: "MingPianoMaster",
    instrument: "Piano",
    bio: "Hi there, I'm MingPianoMaster, a 27-year-old piano teacher at Long & McQuade Lessons Centre and a full-time student at the University of Saskatchewan. I earned my Associate of The Royal Conservatory Diploma at 24 and I am teaching music part-time. Currently in my second year of a philosophy major, my schedule changes with my school commitments. You can find me teaching at the Saskatoon South LC on Wednesdays and Thursdays from 5 pm to 9 pm and at the Saskatoon North LC on Saturdays from 10 am to 5 pm. I've been teaching piano for nine years, five of those at LC. In my free time, I enjoy reading, watching movies, learning German, and practicing piano. My preferred means of communication is through a home phone or email, looking forward to connecting with students and making beautiful music together!",
  },
  {
    name: "PassTheMicMike",
    instrument: "Guitar",
    bio: "Greetings, I'm PassTheMicMike, a 29-year-old music maestro with a passion for guiding students on their musical journey. For four wonderful years, I've been sharing my love for piano and guitar at Long & McQuade. My musical roots run deep—I started playing the guitar at 6 and embraced the piano at 9. Despite the busy schedule from my other full-time job, I bring positivity and dedication to each lesson. Life happens, and schedules might shift, but I'm here to ensure that our musical adventure remains upbeat and enjoyable. If changes arise, feel free to reach out—I'm all about fostering a positive and flexible learning environment! 🎵✨.",
  },

];

const TeacherProfile: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div id="teachersProfiles">
      <Header message="Teachers Profile" name="" />
        {someTeachers.map((teacher, index) => (
          <TeacherProfileBox key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};


const TeacherProfileBox: React.FC<{ teacher: TeacherProfile }> = ({ teacher }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", margin: "20px" }}>
      <h2>{teacher.name}</h2>
      <p>Instrument Taught: {teacher.instrument}</p>
      <p>Bio: {teacher.bio}</p>
    </div>
  );
};

export default TeacherProfile;
