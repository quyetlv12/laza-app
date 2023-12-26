import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loggedStatus } from "../redux/slices/authSlice";

export const useLogged = (value) => {
  const loggedStatusRX = useSelector(loggedStatus)
  return {
    status : loggedStatusRX,
  };
};
export const useCart = () =>{

}
