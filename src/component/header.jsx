import React from "react";
import { HeaderWrapper, Row } from "./style";

const navLinks = ["Store", "Orders","Analytics"]
const Header = () => {
  return (
    <HeaderWrapper>
      <Row justify="space-between">
      <Row gap="1.5rem" align="center" >
        <strong className="brand-logo white-text" >Reeco</strong>
        {
          navLinks.map(navItem=><span key={navItem} className="white-text nav-link" >{navItem}</span>)
        }

      </Row>
      <Row >
        <strong className="white-text" >Hello Swarup</strong>
      </Row>
      </Row>
    </HeaderWrapper>
  );
};

export default Header;
