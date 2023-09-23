import React from "react";
import { HeaderWrapper, Row } from "./style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const navLinks = ["Store", "Orders", "Analytics"];
const Header = () => {
  const state = useSelector((state) => state.orders);
  const { orderData } = state;
  const quantity =
    orderData?.productList?.reduce(
      (total, curr) => total + curr.quantity.updatedQuantity,
      0
    ) || 0;
  return (
    <HeaderWrapper>
      <Row justify="space-between">
        <Row gap="2rem" align="center">
          <strong className="brand-logo white-text">Reeco</strong>
          {navLinks.map((navItem) => (
            <span key={navItem} className="white-text nav-link">
              {navItem}
            </span>
          ))}
        </Row>
        <Row gap="1rem">
          <div className="cart">
            <ShoppingCartOutlined />
            {quantity > 0 && <span className="pill">{quantity}</span>}
          </div>
          <strong className="white-text">Hello Swarup</strong>
        </Row>
      </Row>
    </HeaderWrapper>
  );
};

export default Header;
