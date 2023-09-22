import React from "react";
import { Box, Row } from "../../component/style";
import { camelCase, capitalize, startCase } from "lodash";
// import {  } from "../../utils/db";
import { Card } from "../../component";
import { orderIdDetails } from "../../utils/db";

const keysToRender = [
  "supplier",
  "shippingDate",
  "category",
  "department",
  "status",
];
const OrderDetails = () => {
  return (
    <Box>
      <Row>
        {keysToRender.map((headings, index) => (
          <Card
            key={headings}
            showBorderLeft={index} //0 will be falsy so left border will not be shown
            heading={startCase(camelCase(headings))}
            value={
              typeof orderIdDetails[headings] === "string"
                ? orderIdDetails[headings]
                : ""
            }
          />
        ))}
      </Row>
    </Box>
  );
};

export default OrderDetails;
