import { View, Text } from "react-native";
import React from "react";

const TextStyle = ({ content, size = 16, className, type = "bold" }) => {
  return (
    <Text
      className={`${
        type === "bold"
          ? "text-[#1D1E20] text-[28px] font-bold mb-1"
          : type === "thin"
          ? "text-[#8F959E] text-[13px]"
          : type === "title"
          ? "text-[#1D1E20] font-bold text-[17px]"
          : type === "brand"
          ? "mr-2 text-[#1D1E20] text-[15px]"
          : type === "subTitle"
          ? "text-[#8F959E] text-[15px]"
          : ''
      } ${className} text-[${size}px]`}
    >
      {content}
    </Text>
  );
};

export default TextStyle;
