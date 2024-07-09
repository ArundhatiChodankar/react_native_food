import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import SearchView from "./src/components/SearchView";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    SV: SearchView,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Buisness Search",
    },
  }
);

export default createAppContainer(navigator);
