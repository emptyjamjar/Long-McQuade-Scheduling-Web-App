import { useState } from 'react';

const WelcomeText = () => {
  const [name, setName] = useState('');


  const style = {
    fontFamily: "Roboto",
    color: "#080F0F",
    fontWeight: "500",
    fontSize: "45px",
    width: "fit-content",
    height: "fit-content",
    paddingBottom: "1rem",
    borderBottom: "5px solid #F68B1F",
    borderImage: "linear-gradient(to right, #f5f1ed, #f68b1f) 1",
  };

  if (name) {
    return (
      <h1 className="display-1" style={style}>
        Welcome {name}
      </h1>
    );
  }
  return (
    <h1 className="display-1" style={style}>
      Welcome
    </h1>
  );
};

export default WelcomeText;