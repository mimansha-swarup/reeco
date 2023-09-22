import React from "react";
import { OrderHeaderWrapper } from "./style";
import { Row } from "../../component/style";
import { Button } from "../../component";
import { orderDB } from "../../utils/db";

const orderHeader = () => {
  console.log(orderDB);
  return (
    <OrderHeaderWrapper>
      <Row gap=".75rem" className="text-gray">
        <small>Order</small>
        <small>{">"}</small>
        <small className="underline">Order 32457abc</small>
      </Row>
      <Row justify="space-between" align="center">
        <h2>Order 32457ABC</h2>
        <Row gap="1rem">
          <Button type="secondary" >Back</Button>
          <Button type="primary">Approve Order</Button>
        </Row>
      </Row>
    </OrderHeaderWrapper>
  );
};

export default orderHeader;
