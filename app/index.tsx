import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestorentScreen from "./screens/RestorentScreen";
import CartScreen from "./screens/CartScreen";
import OrderPrepairingScreen from "./screens/OrderPrepairingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

// redux implementaion
import { store } from "../redux/store";
import { Provider } from "react-redux";
import SignUpScreen from "./screens/auth/SignUpScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import WelcomeScreen from "./screens/public/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
           <Stack.Screen
            name="Welcome"
            
            component={WelcomeScreen}
          />
          <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          />
          <Stack.Screen 
          name="Restaurant"
           component={RestorentScreen} 
           />
          <Stack.Screen
            name="Cart"
            options={{ presentation: "modal" }}
            component={CartScreen}
          />
          <Stack.Screen
            name="OrderPrepairing"
            component={OrderPrepairingScreen}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
          />
           <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
           <Stack.Screen
            name="Sign-up"
            component={SignUpScreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
