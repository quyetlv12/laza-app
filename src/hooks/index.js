import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LOGIN, PROFILE } from "../configs";

export const useLogged = () => {
  const [status, setStatus] = useState(true);
  return status
};
