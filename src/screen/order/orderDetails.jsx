import React from "react";
import { Box, Row } from "../../component/style";
import { camelCase, startCase } from "lodash";
import { Card } from "../../component";
import { iconLookup } from "../../utils/db";
import moment from "moment/moment";

const OrderDetails = (props) => {
  const conditionalRender = (key, data) => {
    switch (key) {
      case "total":
        return data ? `$ ${data}` : "";
      case "shippingDate":
        return data ? moment(data).format("ddd, MMM DD ") : "";
      case "category":
        return Array.isArray(data) && data?.length ? (
          <Row gap=".5rem">{data?.map((icon) => iconLookup[icon])}</Row>
        ) : ""

      default:
        return data;
    }
  };

  return (
    <Box>
      <Row>
        {Object.keys(props).map((headings, index) => (
          <Card
            key={headings}
            showBorderLeft={index} //0 will be falsy so left border will not be shown
            heading={startCase(camelCase(headings))}
            value={conditionalRender(headings, props?.[headings])}
          />
        ))}
      </Row>
    </Box>
  );
};

export default OrderDetails;
