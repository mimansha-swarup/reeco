import { orderIdDetails } from "./db";
import { randomIntFromInterval } from "./randomNum";

export const getOrderDetailsById = () =>{

  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(Promise.resolve({data:orderIdDetails, status:"success"}))
    }, 1000*randomIntFromInterval(1,6));
  })
}