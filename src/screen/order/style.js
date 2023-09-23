import { Modal } from "antd";
import styled from "styled-components";

export const OrderHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem 0rem 5rem;
  box-shadow: 0px 5px 10px 1px lightgray;
  background: white;

  .text-gray {
    color: gray;
  }
  .underline {
    text-decoration: underline;
  }
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f1f3f5;
  min-height: 75vh;
`;
export const EditModalWrapper = styled(Modal)`
  p,
  strong,
  span,
  label {
    color: rgba(0, 0, 0, 0.7) !important;
  }

  label {
    font-size: 1.1rem !important;
  }

  form {
    width: 100%;
    margin-left: 2rem;
  }
  .ml-1{
    margin-left: 3rem;
  }
  .ml-equivalent{
    margin-left: 6.6rem;
  }
  .ant-tag{
    color: white !important;
    cursor: pointer;
  }
`;

export const Search = styled.input`
outline: none;
min-width: 250px;
border-radius: 1rem;
border: 1px solid gray;
padding:.5rem 1rem;
font-size: 1rem;

`
