import { getOrderDetailsById } from "../../utils/service";
import { setOrderDetails } from "./orderSlice";

export const getOrderDetailsThunk = async (dispatch) => {
  try {
    const res = await getOrderDetailsById();
    dispatch(setOrderDetails(res.data));
  } catch (error) {
    console.error(error)
  }
};

