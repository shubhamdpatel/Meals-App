import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21)
    TouchableCmp = TouchableWithoutFeedback;
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    // borderRadius: 10,
    // overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 15,
    shadowOpacity: 0.26,
    // shadowColor: "grey",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 9,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    elevation: 3,
  },
  title: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    fontFamily: Platform.OS === "ios" ? "Times New Roman" : "open-sans",
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
