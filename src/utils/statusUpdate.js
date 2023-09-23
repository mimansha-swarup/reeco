export const approveStatusUpdate = (initialState, product) => {
  let status = initialState;

  const { price, quantity } = product;

  const isPriceUpdated = price.previousPrice !== price.updatedPrice;
  const isQuantityUpdated =
    quantity.previousQuantity !== quantity.updatedQuantity;

  if (isPriceUpdated) {
    status = "Price updated";
  }
  if (isQuantityUpdated) {
    status = "Quantity updated";
  }
  if (isPriceUpdated && isQuantityUpdated) {
    status = "Price and Quantity updated";
  }

  return status;
};
