import styled from "styled-components";

interface H1Props {
  message: string;
  name: string;
}

/* 
    The welcome text for the homepage. Uses styled-components for styling (no css file).
    TODO: need to update with user's name when connected to code (i.e., getName()). {name} will become 
    {getName()}.
 */
const H1 = styled.h1`
  font-family: "Roboto";
  color: #080f0f;
  font-weight: 500;
  font-size: 4.5vw;
  width: fit-content;
  margin: 0 0 3rem 0;
  height: fit-content;
  padding: 0rem 0 0.5rem 0;
  border-bottom: 3px solid;
  border-image: linear-gradient(to right, #f5f1ed, #f68b1f) 1;
`;

const WelcomeText = ({ message, name }: H1Props) => {
  if (name) {
    return (
      <H1 className="display-1">
        {message} {name}
      </H1>
    );
  }
  return <H1 className="display-1">{message}</H1>;
};

export default WelcomeText;
