import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: {},
  // id: null,
  // status: "pending",
  // department: "",
  // shippingDate: "",
  // supplier: "",
  // category: [],
  // totalBillAmt: 0,
  // productList: [],
};

export const orderSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    setOrderStatus: (state, action) => {
      state.orderData.status = action.payload.status;
    },

    setOrderDetails: (state, action) => {
      state.orderData = action.payload;
    },
    setProductStatus: (state, action) => {
      state.orderData.productList = state.orderData?.productList?.map(
        (product) =>
          product.productId === action.payload.id
            ? {
                ...product,
                status: {
                  statusMsg: action.payload.status,
                  isApproved: !["Missing", "Missing - Urgent"].includes(
                    action.payload.status
                  ),
                },
              }
            : product
      );
    },
    setUpdatedProduct: (state, action) => {
      state.orderData.productList = state.orderData?.productList?.map(
        (product) =>
          product.productId === action.payload.productId
            ? action.payload
            : product
      );
      state.orderData.totalBillAmount = state.orderData.productList?.reduce(
        (total,current) => total + current.totalPrice?.updatedPrice  ,0
      ) 
    },
  },
});

export const {
  setOrderDetails,
  setOrderStatus,
  setProductStatus,
  setUpdatedProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
