import { useState } from "react";

export const useLogged = () => {
  const [status, setStatus] = useState(false);
  return {
    status,
  };
};
