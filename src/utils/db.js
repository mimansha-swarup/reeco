import { v4 as uuidv4 } from "uuid";
import { Apple, Avocado } from "../assets";
import { CoffeeOutlined, ContainerOutlined } from "@ant-design/icons";

export const orderIdDetails = {
  id: "32457abc",
  // status: "Aproovel for",
  status: "pending",
  department: "300-444-678",
  shippingDate: 1697902492,
  supplier: "East coast fruits & vegetables",
  category: [
    "ContainerOutlined",
    "CoffeeOutlined",
    "ContainerOutlined",
    "CoffeeOutlined",
  ],
  totalBillAmount: 61.44,
  productList: [
    {
      productId: uuidv4(),
      productName:
        "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
      thumbnail: Apple,
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
    {
      productId: uuidv4(),
      productName:
        "Chicken Breast Fillets, Boneless Marinated, 6 ounce Raw, invivid",
      thumbnail: Avocado,
      brand: "Meat Kart",
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
    {
      productId: uuidv4(),
      productName: "Organic Avocado Toast, 2 Slices",
      thumbnail: Apple,
      brand: "Green Delights",
      status: {
        isApproved: false,
        statusMsg: "",
      },
      totalPrice: {
        previousPrice: 35.96,
        updatedPrice: 35.96,
      },
      price: {
        previousPrice: 8.99,
        updatedPrice: 8.99,
        suffix: "per piece",
      },
      quantity: {
        previousQuantity: 4,
        updatedQuantity: 4,
        suffix: "pieces",
      },
    },
    {
      productId: uuidv4(),
      productName: "Premium Dark Chocolate, 70% Cocoa",
      thumbnail: Avocado,
      brand: "ChocoLux",
      status: {
        isApproved: false,
        statusMsg: "",
      },
      totalPrice: {
        previousPrice: 13.5,
        updatedPrice: 13.5,
      },
      price: {
        previousPrice: 4.5,
        updatedPrice: 4.5,
        suffix: "per bar",
      },
      quantity: {
        previousQuantity: 3,
        updatedQuantity: 3,
        suffix: "Bars",
      },
    },
    {
      productId: uuidv4(),
      productName: "Fresh Strawberries, Organic, 1 Pound",
      thumbnail: Apple,
      brand: "Beery Bliss",
      status: {
        isApproved: false,
        statusMsg: "",
      },
      totalPrice: {
        previousPrice: 11.98,
        updatedPrice: 11.98,
      },
      price: {
        previousPrice: 5.99,
        updatedPrice: 5.99,
        suffix: "per pack",
      },
      quantity: {
        previousQuantity: 2,
        updatedQuantity: 2,
        suffix: "packs",
      },
    },
  ],
};

export const iconLookup = {
  ContainerOutlined: <ContainerOutlined />,
  CoffeeOutlined: <CoffeeOutlined />,
};
