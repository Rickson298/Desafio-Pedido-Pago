import styled from "styled-components";

interface PropsStyledPagination {
  isFirstPage: boolean;
  isLastPage: boolean;
}

export const ContainerPagination = styled.div<PropsStyledPagination>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 0px 24px 0px;
  /* position: relative;
  bottom: -36px; */

  .items-quantity--description {
    font-weight: 400;
    font-size: 16px;
    color: #587169;
  }

  .page-number {
    width: 75px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #587169;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
  }

  .button-forward {
    border-radius: 0px 8px 8px 0px;
    border: 1.4px solid
      ${({ isLastPage }) => (isLastPage ? "#CAD6D1" : "#709085")};
    .arrow.forward {
      color: ${({ isLastPage }) => (isLastPage ? "#CAD6D1" : "#709085")};
    }
  }

  .button-backward {
    border-radius: 8px 0px 0px 8px;
    border: 1.4px solid
      ${({ isFirstPage }) => (isFirstPage ? "#CAD6D1" : "#709085")};
    .arrow.back {
      color: ${({ isFirstPage }) => (isFirstPage ? "#CAD6D1" : "#709085")};
    }
  }

  .button-forward,
  .button-backward {
    transition: all ease 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    width: 48px;
    height: 36px;
    outline: none;
    background: #fff;
    cursor: pointer;
    .arrow {
      font-size: 32px;
      transition: all ease 0.2s;
    }
    &:hover .arrow {
      transform: scale(1.2);
    }
  }
`;
