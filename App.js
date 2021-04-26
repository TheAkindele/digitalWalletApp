import * as React from "react"
import {SafeAreaProvider} from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from "./src/screens/register"
import {AuthPage} from "./src/screens/authPage/AuthPage"
// import {HomePage} from "./src/screens/LandingPage"


const Stack = createStackNavigator();

const App = () => {
  const [auth, setAuth] = React.useState(false)

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Auth" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
