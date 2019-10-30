import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

export { Button };
