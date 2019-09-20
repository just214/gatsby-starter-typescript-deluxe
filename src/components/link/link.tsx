import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  margin-top: 20px;
  display: block;
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
