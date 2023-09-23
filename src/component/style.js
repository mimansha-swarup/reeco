import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Box = styled.div`
  background-color: white;
  padding: 1.25rem;
  border-radius: 8px;
  margin: 0 5rem;
  margin-top: 2rem;
  border: 1px solid lightgray;
`;
export const Img = styled.img`
  width: ${(props) => props.width || "75px"};
  height: auto;
`;
export const Shimmer = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #a0a0a040 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "10px"};

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

// ----------------Wrappers----------

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2.5rem;
  flex: 1;
  border-left: ${(props) =>
    props.showBorderLeft ? "1px solid lightgray" : "none"};
  .heading {
    color: gray;
    font-size: 0.85rem;
  }
  .details {
    font-size: 1.15rem;
    font-weight: 600;
  }
`;
export const ButtonWrapper = styled.button`
  padding: 0.35rem 1rem;
  background-color: white;
  padding: ${(props) => props.padding || "0.35rem 1rem"};
  border-radius: ${(props) => props.radius || "4rem"};
  font-weight: 500;
  outline: none;
  border: none;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #1e633f;
      border: 1px solid #1e633f;
      color: white;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      color: #1e633f;
      border: 1px solid #1e633f;
      background-color: white;
    `}
  ${(props) =>
    props.type === "text" &&
    css`
      color: ${(props) => (props.textColor ? props.textColor : "#1e633f")};
      border: none;
      background-color: inherit; // can be inherit too
    `}
    &:disabled{
      cursor: not-allowed;
      color: #999999
    }
`;
export const HeaderWrapper = styled.header`
  background-color: #1e633f;
  padding: 1rem 5rem;

  .cart {
    position: relative;
    .pill {
      position: absolute;
      font-size: 0.5rem;
      height: 15px;
      width: 15px;
      display: flex;
      border-radius: 100%;
      background-color: #3dca72;
      top: 0;
      right: 0;
      transform: translate(45%, -45%);
      justify-content: center;
      align-items: center;
    }
  }

  .white-text,
  .cart {
    color: white;
    opacity: 0.9;
  }
  .brand-logo {
    opacity: 1;
    font-size: 1.25rem;
  }
`;

export const TableWrapper = styled.div`
  table {
    width: 100%;
    background-color: ${(props) =>
      props.bgTableColor ? props.bgTableColor : "#fff"};
    /* border-collapse: separate !important; */
    /* border-collapse: collapse; */
    border-spacing: 0;
    ${(props) =>
      props?.showShadow
        ? css`
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          `
        : ""}
    padding: 0 12px;
    margin: 1.5rem 0;
  }

  th {
    padding: 8px;
    font-weight: 600;
    line-height: 140%;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }

  th:first-child {
    border-top-left-radius: 16px;
    border-left: 1px solid lightgray;
  }

  th:last-child {
    border-right: 1px solid lightgray;
    border-top-right-radius: 16px;
  }

  table thead {
    border-radius: 10px;
    color: gray;
  }

  td {
    padding: 1rem;
    line-height: 140%;
    border-bottom: 2px solid lightgray;
  }

  /* tr{
    border: 1px solid black
  } */

  .empty_wrapper {
    width: 100%;
    height: 250px;
    background: ${(props) => props.theme.color?.BODY_BASE};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;
