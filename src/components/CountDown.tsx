import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
`;

export default function CountDown() {
  return (
    <StyledDiv>
      <h3>Refreshing In:</h3>
      <p>10 seconds</p>
    </StyledDiv>
  );
}
