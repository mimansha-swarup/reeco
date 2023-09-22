import { v4 as uuidv4 } from "uuid";

export const orderIdDetails = {
  id: "32457abc",
  status: "pending",
  department: "300-444-678",
  shippingDate: "Thu, Feb 10",
  supplier: "East coast fruits & vegetables",
  category: [],
  totalBillAmt: 15028.3,
  productList: [
    {
      productId: uuidv4(),
      productName:
        "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
      thumbnail: "",
      brand: "Licious",
      status: {
        isApproved: false,
        statusMsg: "",
      },
      totalPrice: {
        previousPrice: 0,
        updatedPrice: 0,
      },
      price: {
        previousPrice: 60.67,
        updatedPrice: 60.67,
        suffix: "/ 6*1LB",
      },
      quantity: {
        previousQuantity: 0,
        updatedQuantity: 0,
        suffix: " X 6*1LB",
      },
    },
  ],
};

export const orderDB = [
  {
    id: uuidv4(),
    product: "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
    thumbnail: "",
    brand: "Licious",
    price: {
      value: 60.67,
      suffix: "/ 6*1LB",
    },
    quantity: {
      value: 0,
      suffix: " X 6*1LB",
    },
    total: 0,
    status: "",
  },
  {
    id: uuidv4(),
    product: "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
    thumbnail: "",
    brand: "Licious",
    price: {
      value: 60.67,
      suffix: " / 6*1LB",
    },
    quantity: {
      value: 0,
      suffix: " X 6*1LB",
    },
    total: 0,
    status: "",
  },
  {
    id: uuidv4(),
    product: "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
    thumbnail: "",
    brand: "Licious",
    price: {
      value: 60.67,
      suffix: " / 6*1LB",
    },
    quantity: {
      value: 0,
      suffix: " X 6*1LB",
    },
    total: 0,
    status: "",
  },
  {
    id: uuidv4(),
    product: "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
    thumbnail: "",
    brand: "Licious",
    price: {
      value: 60.67,
      suffix: " / 6*1LB",
    },
    quantity: {
      value: 0,
      suffix: " X 6*1LB",
    },
    total: 0,
    status: "",
  },
];
