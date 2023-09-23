import { Modal } from "antd";
import React from "react";
import { Button } from "../../../component";

const MissingModal = ({ product, handleClose, updateStatus }) => {
  return (
    <Modal
      open={product?.id}
      title="Missing Product"
      onCancel={handleClose}
      footer={[
        <Button
          type="text"
          textColor="gray"
          onClick={() => updateStatus(product.id, "Missing")}
        >
          {" "}
          No
        </Button>,
        <Button
          type="text"
          textColor="gray"
          onClick={() => updateStatus(product.id, "Missing - Urgent")}
        >
          {" "}
          Yes
        </Button>,
      ]}
    >
      is {product.name} <strong>urgent</strong>?
    </Modal>
  );
};

export default MissingModal;
