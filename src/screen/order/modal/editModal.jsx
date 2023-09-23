import {  Form, InputNumber, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Img, Row } from "../../../component/style";
import { Button } from "../../../component";
import { EditModalWrapper } from "../style";
import { approveStatusUpdate } from "../../../utils/statusUpdate";
import { useDispatch } from "react-redux";
import { setUpdatedProduct } from "../../../store/orders/orderSlice";

const oneLineFormLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
  labelAlign: "left",
};

const reasonsList = [
  "Missing Product",
  "Price is not the same",
  "Quantity is not the same",
  "Other",
];
const EditModal = ({ product, handleClose }) => {
  const [productState, setProductState] = useState({});
  const [reason, setReason] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setProductState(product);
    }
  }, [product]);

  const handleProductChange = (fieldName, subFieldName) => (event) => {
    const value = event.target ? event.target.value : event;

    setProductState((prev) => {
      const priceObj = {
        price: prev.price.updatedPrice,
        quantity: prev.quantity.updatedQuantity,
        [fieldName]: value,
      };
      return {
        ...prev,
        totalPrice: {
          ...prev.totalPrice,
          updatedPrice: priceObj.price * priceObj.quantity,
        },
        [fieldName]: {
          ...prev[fieldName],
          [subFieldName]: value,
        },
      };
    });
  };

  const handleQuantityChange = (type) => {
    let updatedQuantity = productState.quantity?.updatedQuantity || 0;
    if (type === "increase") {
      updatedQuantity += 1;
    } else if (type === "decrease" && updatedQuantity > 0) {
      updatedQuantity -= 1;
    }
    handleProductChange("quantity", "updatedQuantity")(updatedQuantity);
  };
  const onSubmit = () => {
    const status = approveStatusUpdate(productState.status?.statusMsg, productState);
    dispatch(
      setUpdatedProduct({
        ...productState,
        price:{
          ...productState.price,
          previousPrice: product.price.updatedPrice
        },
        quantity:{
          ...productState.quantity,
          previousQuantity: product.quantity.updatedQuantity
          
        },
        totalPrice:{
          ...productState.totalPrice,
          previousPrice: product.totalPrice.updatedPrice

        },
        status: { ...productState.status, statusMsg: status },
      })
    );
    handleClose();
  };

  return (
    <EditModalWrapper
      open={productState.productId}
      width={800}
      title={
        <Col>
          <strong>{productState.productName}</strong>
          <span>{productState.brand}</span>
        </Col>
      }
      onCancel={handleClose}
      footer={[
        <Button type="text" onClick={handleClose}>
          Cancel
        </Button>,
        <Button type="primary" onClick={onSubmit}>
          Send
        </Button>,
      ]}
    >
      <Row ga="1rem">
        <Img
          src={productState.thumbnail}
          alt={productState.productName}
          width="220px"
        />
        <Form {...oneLineFormLayout}>
          <Form.Item label="Price ($)">
            <Row className="ml-equivalent">
              <InputNumber
                min={0}
                value={productState.price?.updatedPrice}
                onChange={handleProductChange("price", "updatedPrice")}
              />
              <span>{productState.price?.suffix}</span>
            </Row>
          </Form.Item>

          <Form.Item label="Quantity">
            <Row gap="1rem" className="ml-1">
              <Button
                type="primary"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </Button>
              <InputNumber
                value={productState.quantity?.updatedQuantity}
                onChange={handleProductChange("quantity", "updatedQuantity")}
              />
              <Button
                type="primary"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </Button>
              <span>{productState.quantity?.suffix}</span>
            </Row>
          </Form.Item>

          <Form.Item label="Total">
            <strong className="ml-equivalent">
              $ {productState?.totalPrice?.updatedPrice}
            </strong>
          </Form.Item>
        </Form>
      </Row>
      <p>
        <strong>Choose Reason</strong> <small>(Optional)</small>
      </p>
      <Row gap="1rem">
        {reasonsList?.map((eachReason) => (
          <Tag
            color={eachReason === reason ? "#1e633f" : "gray"}
            key={eachReason}
            onClick={() => setReason(eachReason)}
          >
            {eachReason}
          </Tag>
        ))}
      </Row>
    </EditModalWrapper>
  );
};

export default EditModal;
