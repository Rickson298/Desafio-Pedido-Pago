import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #b5f1dd;
  filter: drop-shadow(0px 4px 8px rgba(165, 171, 179, 0.16));
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  gap: 18px;
  flex-wrap: wrap;
  max-height: 90px;
  transition: all ease 0.5s;
  position: relative;

  .container-items-card-mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
  }
`;
