import styled from "styled-components";

const Code = styled.code`
  display: inline-block;
  color: ${props => props.theme.darkblue};
  font-size: 1.5rem;
  background: #f5f5f5;
  margin-top: 40px;
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  ::before {
    content: "$ ";
  }
`;

export default Code;
