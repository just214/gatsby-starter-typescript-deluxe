import styled from "styled-components";

const Code = styled.code`
  display: inline-block;
  color: ${(props) => props.theme.colors.darkblue};
  font-size: 1.2rem;
  background: #f5f5f5;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 0.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  ::before {
    content: "$ ";
  }
`;

export { Code };
