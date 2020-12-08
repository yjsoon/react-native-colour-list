import React from "react";
import { View, Text } from "react-native";

export default function BlockRGB(props) {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
      }}
    ></View>
  );
}
