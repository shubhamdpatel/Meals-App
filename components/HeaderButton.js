import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Color from "../constant/Color";

const customHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={(Platform.OS = "android" ? "white" : Color.primaryColor)}
    />
  );
};

export default customHeaderButton;
