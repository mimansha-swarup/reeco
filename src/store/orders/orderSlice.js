import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  status: "",
  department: "",
  shippingDate: "",
  supplier: "",
  category: [],
  totalBillAmt: 0,
  productList: [],
};

export const orderSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    setOrderStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});


export const { setOrderStatus } = orderSlice.actions

export default orderSlice.reducer
