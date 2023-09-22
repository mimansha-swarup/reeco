import React from "react";
import { Header } from "../../component";
import OrderHeader from "./orderHeader";
import { Container } from "./style";
import OrderDetails from "./orderDetails";
import OrderListView from "./listView";

const OrderPage = () => {
  return (
    <Container>
      <Header />
      <OrderHeader />
      <OrderDetails />
      <OrderListView />
    </Container>
  );
};

export default OrderPage;
