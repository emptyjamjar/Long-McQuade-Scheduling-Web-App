import styled from "styled-components";

/* 
    The welcome text for the homepage. Uses styled-components for styling (no css file).
    TODO: need to update with user's name when connected to code (i.e., getName()). {name} will become 
    {getName()}.
 */
const H1 = styled.h1`
  position: relative;
  font-family: "Roboto";
  color: #080f0f;
  font-weight: 500;
  font-size: 55px;
  width: fit-content;
  margin: 0 0 3rem 0;
  height: fit-content;
  padding-bottom: 0.5rem;
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #f5f1ed, #f68b1f) 1;
`;

const WelcomeText = () => {
  const name = "Ruth";

  if (name) {
    return <H1 className="display-1">Welcome {name}</H1>;
  }
  return <H1 className="display-1">Welcome</H1>;
};

export default WelcomeText;
