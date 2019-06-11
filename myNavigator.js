import { FormScreen } from './App.js';
import { HomeScreen } from './App.js';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Form: FormScreen
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;