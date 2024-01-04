import {
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  PresenceTransition,
  VStack,
} from "native-base";
import * as IconsOutline from "react-native-heroicons/outline";

import React from "react";
const SearchModal = ({ modalVisible, setModalVisible }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <VStack w="100%" space={5} alignSelf="center">
      {/* <PresenceTransition initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      transition: {
        duration: 250
      }
    }}>
       
      </PresenceTransition> */}
      <Input
          placeholder="Tìm kiếm sản phẩm hoặc danh mục ..."
          width="100%"
          borderRadius="27"
          py="5"
          px="5"
          fontSize="14"
          // InputLeftElement={<IconsOutline.MagnifyingGlassIcon />}
          // InputRightElement={<IconsOutline.MagnifyingGlassIcon />}
        />
    </VStack>
  );
};

export default SearchModal;
