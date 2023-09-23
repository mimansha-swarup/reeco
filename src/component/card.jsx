import React from "react";
import { CardWrapper, Shimmer } from "./style";

const Card = ({ heading, value, showBorderLeft }) => {
  return (
    <CardWrapper showBorderLeft={Boolean(showBorderLeft)}>
      <p className="heading">{heading}</p>
      <span className="details">
        {value ? value : <Shimmer width="120px" height="40px" />}
      </span>
    </CardWrapper>
  );
};

export default Card;
