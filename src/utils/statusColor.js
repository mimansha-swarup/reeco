/* eslint-disable no-fallthrough */ 

export const getStatusColor = (status) => {
  switch (status) {
    case "Missing - Urgent":
      return {
        tag: "#DB2114",
        check: "gray",
        cross: "#DB2114",
      };
    case "Missing":
      return {
        tag: "#F66D44",
        check: "gray",
        cross: "#F66D44",
      };

    case "Price and Quantity updated":
    case "Quantity updated":
    case "Price updated":
    case "Approve":
      return {
        tag: "#3DCA72",
        check: "#3DCA72",
        cross: "gray",
      };

    default:
      return {
        tag: "gray",
        check: "gray",
        cross: "gray",
      };
  }
};
