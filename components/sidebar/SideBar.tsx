import styled from "styled-components";

export const SideBar = styled.aside`
  min-height: 100%;
  width: 256px;
  background: white;
  border: 1px solid #eaefed;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  @media (max-width: 1000px) {
    display: none;
  }
`;
