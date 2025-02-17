import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./assets/src/screens/SearchScreen";

const navigator  = createStackNavigator({
  Search:SearchScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'BuisnessSearch'
  }
});

export default createAppContainer(navigator);
