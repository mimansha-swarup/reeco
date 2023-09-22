import React from "react";
import { Box, Row } from "../../component/style";
import { Button, Table } from "../../component";
import { orderDB } from "../../utils/db";

const OrderListView = () => {
  const columns = [
    {
      title: "Product Name",
      key: "Product Name",
      align: "center",
      width: "30%",
      render: (actionIndex) => <div>{actionIndex.product}</div>,
    },
    {
      title: "Brand",
      key: "Brand",
      dataIndex: "brand",
      width:"10%",
    },
    {
      title: "Price",
      key: "Price",
      width:"10%",
      render: (actionIndex) =>
        `${actionIndex.price.value} ${actionIndex.price.suffix}`,
    },
    {
      title: "Quantity",
      key: "Quantity",
      render: (actionIndex) => (
        <span>
          <strong>{actionIndex.quantity.value}</strong> {actionIndex.quantity.suffix}{" "}
        </span>
      ),
      width:"10%",
    },
    {
      width:"10%",
      title: "Total",
      key: "Total",
      render: (actionIndex) => (
        <span>
          <strong>{actionIndex.total}</strong> 
        </span>
      ),
    },
    {
      title: "Status",
      key: "Status",
      width:"50%",
      dataIndex:"product",
      className:"bg-gray"
    },
  ];
  return (
    <Box>
      <Row justify="space-between">
        <input type="search" name="" id="" />
        <Row>
          <Button type="secondary">Add Items</Button>
        </Row>
      </Row>
      <Table columns={columns} dataSource={orderDB} />
    </Box>
  );
};

export default OrderListView;
