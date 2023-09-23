import React from "react";
import { OrderHeaderWrapper } from "./style";
import { Row, Shimmer } from "../../component/style";
import { Button } from "../../component";
import { useDispatch} from "react-redux";
import { setOrderStatus } from "../../store/orders/orderSlice";

const OrderHeader = ({ orderId , status}) => {
  const dispatch = useDispatch();

  const handleApprove = () => {
    if(!orderId) return
    dispatch(setOrderStatus({ status: "approved" }));
  };

  return (
    <OrderHeaderWrapper>
      <Row gap=".75rem" className="text-gray">
        <small>Order</small>
        <small>{">"}</small>

        <small className="underline">
          <Row align="center" gap=".75rem">
            {" "}
            Order {orderId ? orderId : <Shimmer />}
          </Row>
        </small>
      </Row>
      <Row justify="space-between" align="center">
        <h2>
          <Row align="center" gap=".75rem">
            {" "}
            Order {orderId ? orderId : <Shimmer width="95px" height="20px" />}
          </Row>
        </h2>
        <Row gap="1rem">
          <Button type="secondary">Back</Button>
          <Button type="primary" disabled={status==="approved"} onClick={handleApprove}>
            Approve Order
          </Button>
        </Row>
      </Row>
    </OrderHeaderWrapper>
  );
};

export default OrderHeader;
