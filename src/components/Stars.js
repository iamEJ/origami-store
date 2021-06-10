import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Stars({ difficulty }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <p key={index}>
        {difficulty >= index + 1 ? (
          <BsStarFill />
        ) : difficulty >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </p>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{stars}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p {
    display: inline-block;
    margin-right: 3px;
    color: #ffa500;
  }
`;

export default Stars;
