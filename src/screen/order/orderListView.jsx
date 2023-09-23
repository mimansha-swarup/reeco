import React, { useState } from "react";
import { Box, Col, Img, Row } from "../../component/style";
import { Button, Table } from "../../component";
import { Tag } from "antd";
import EditModal from "./modal/editModal";
import {
  CheckOutlined,
  CloseOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setProductStatus } from "../../store/orders/orderSlice";
import { getStatusColor } from "../../utils/statusColor";
import MissingModal from "./modal/missingModal";
import { approveStatusUpdate } from "../../utils/statusUpdate";
import { Search } from "./style";
import { convertJsonToCsv } from "../../utils/convertToCsv";

const INITIAL_MISSING_PRODUCT = {
  id: null,
  name: "",
};
const OrderListView = ({ productList, isEditable, orderId }) => {
  const [editOrder, setEditOrder] = useState({});
  const [missingProduct, setMissingProduct] = useState(INITIAL_MISSING_PRODUCT);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleEditClose = () => setEditOrder({});
  const handleMissingClose = () => setMissingProduct(INITIAL_MISSING_PRODUCT);

  const openMissing = (actionIndex) =>
    setMissingProduct({
      id: actionIndex.productId,
      name: actionIndex.productName,
    });

  const handleStatus = (id, status) => {
    dispatch(setProductStatus({ id, status }));
  };

  const updateStatus = (id, status) => {
    handleStatus(id, status);
    handleMissingClose();
  };

  const filteredProducts = productList?.filter((product) =>
    product.productName.includes(search)
  );

  const columns = [
    {
      title: "Product Name",
      key: "Product Name",
      align: "center",
      width: "30%",
      render: (actionIndex) => (
        <Row align="center">
          <Img src={actionIndex.thumbnail} alt={actionIndex.productName} />
          {actionIndex.productName}
        </Row>
      ),
    },
    {
      title: "Brand",
      key: "Brand",
      dataIndex: "brand",
      width: "10%",
    },
    {
      title: "Price",
      key: "Price",
      width: "10%",
      render: ({ price }) => (
        <Col>
          <span>
            {price?.updatePrice > 0 && "$"}{" "}
            {`${price?.updatedPrice} ${price?.suffix}`}
          </span>
          {price?.updatedPrice !== price?.previousPrice && (
            <small className="line-through">$ {price?.previousPrice}</small>
          )}
        </Col>
      ),
    },
    {
      title: "Quantity",
      key: "Quantity",
      render: ({ quantity }) => (
        <Col>
          <span>
            <strong>{quantity?.updatedQuantity}</strong> {quantity?.suffix}{" "}
          </span>
          {quantity?.updatedQuantity !== quantity?.previousQuantity && (
            <small className="line-through">{quantity?.previousQuantity}</small>
          )}
        </Col>
      ),
      width: "10%",
    },
    {
      width: "10%",
      title: "Total",
      key: "Total",
      render: ({ totalPrice }) => (
        <Col>
          <strong>
            {totalPrice?.updatedPrice > 0 && "$"} {totalPrice?.updatedPrice}
          </strong>
          {totalPrice?.updatedPrice !== totalPrice?.previousPrice && (
            <small className="line-through">
              $ {totalPrice?.previousPrice}
            </small>
          )}
        </Col>
      ),
    },
    {
      title: "Status",
      key: "Status",
      width: "50%",
      className: "bg-gray",
      render: (actionIndex) => {
        const color = getStatusColor(actionIndex.status.statusMsg);
        return (
          <Row justify="space-between" align="center">
            <Tag color={color?.tag}>{actionIndex.status.statusMsg}</Tag>

            <Row gap="1rem">
              <Button
                disabled={!isEditable}
                type="text"
                textColor={color?.cross}
                padding=".35rem 0px"
                onClick={() => openMissing(actionIndex)}
              >
                <CloseOutlined

                // style={{ color: color?.cross }}
                />
              </Button>
              <Button
                disabled={!isEditable}
                type="text"
                textColor={color?.check}
                padding=".35rem 0px"
                onClick={() =>
                  handleStatus(
                    actionIndex.productId,
                    approveStatusUpdate("Approve", actionIndex)
                  )
                }
              >
                <CheckOutlined
                // style={{ color: color?.check }}
                />
              </Button>
              <Button
                disabled={!isEditable}
                type="text"
                onClick={() => setEditOrder(actionIndex)}
              >
                Edit
              </Button>
            </Row>
          </Row>
        );
      },
    },
  ];
  return (
    <Box>
      <EditModal product={editOrder} handleClose={handleEditClose} />
      <MissingModal
        product={missingProduct}
        handleClose={handleMissingClose}
        updateStatus={updateStatus}
      />
      <Row justify="space-between">
        <Search
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value || "")}
        />
        <Row gap="1rem">
          <Button
            type="text"
            padding="0.35rem 0px"
            disabled={ productList?.length < 1}
            onClick={() => convertJsonToCsv(productList, orderId)}
          >
            <PrinterOutlined />
          </Button>
          <Button type="secondary">Add Items</Button>
        </Row>
      </Row>
      <Table
        columns={columns}
        dataSource={filteredProducts}
        rowKey={"productId"}
      />
    </Box>
  );
};

export default OrderListView;
