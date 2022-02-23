import React, { useState } from "react";
import { StyleSheet } from "react-native";

// import { useScreens } from "react-native-screens";
import { enableScreens } from "react-native-screens";

// Font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// Navigator
import MealsNavigatior from "./navigation/MealsNavigatior";

// useScreens();
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, SetfontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => SetfontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <MealsNavigatior />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
