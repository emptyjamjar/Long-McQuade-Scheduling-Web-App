import Header from "../components/Header";

const addstudent = () => {
  return (
    <div>
      <div id="manage">
        <Header message="Registration" name=""></Header>
      </div>
      <form method="post" action="addStudent">
        Student ID:
        <input type="int" name="studentId" />
        First Name:
        <input type="text" name="firstName" /> Last Name:
        <input type="text" name="lastName" /> Address:
        <input type="text" name="address" /> Postal Code:
        <input type="text" name="postCode" /> Phone number:
        <input type="text" name="phoneNumber" /> Instruments played:
        <input type="text" name="instrumentsPlayed" /> Experience:
        <input type="text" name="experience" /> Date of Birth:
        <input type="date" name="yearOfBirth" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default addstudent;
