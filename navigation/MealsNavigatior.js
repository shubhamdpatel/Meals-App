import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  createDrawerNavigator,
} from "react-navigation-stack";

// Color
import Color from "../constant/Color";
//Import Screen
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerTitle: "Meal Categories",
      // },
    },
    CategoryMeal: CategoryMealsScreen,
    MealDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Color.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
