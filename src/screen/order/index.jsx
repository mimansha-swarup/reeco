/* eslint-disable  react-hooks/exhaustive-deps */ 
import React from "react";
import { Header } from "../../component";
import OrderHeader from "./orderHeader";
import { Container } from "./style";
import OrderDetails from "./orderDetails";
import OrderListView from "./orderListView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderDetailsThunk } from "../../store/orders/order.thunk";
import { isEmpty } from "lodash";

const OrderPage = () => {
  const state = useSelector((state) => state);
  const {
    id: orderId,
    supplier,
    shippingDate,
    category,
    department,
    status,
    productList,
    totalBillAmount,
  } = state.orders.orderData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(state.orders.orderData)) {
      dispatch(getOrderDetailsThunk);
    }
  }, [state.orders.orderData]);

  const isEditable =
    status !== "approved" && new Date(shippingDate * 1000) > new Date();

  return (
    <Container>
      <Header />
      <OrderHeader orderId={orderId} department={department} status={status} />
      <OrderDetails
        supplier={supplier}
        shippingDate={shippingDate}
        total={totalBillAmount}
        category={category}
        department={department}
        status={status}
      />
      <OrderListView
        productList={productList}
        isEditable={isEditable}
        orderId={orderId}
      />
    </Container>
  );
};

export default OrderPage;
