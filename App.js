
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen/BasketScreen';
import PreparingOrderingScreen from './screens/PreparingOrderingScreen';
import DeliveryScreen from './screens/DeliveryScreen/deliveryScreen';
import MapScreen from './screens/maps';

const Stack = createNativeStackNavigator();
export default function App() {
  return (


    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{
            headerShown: false,
            presentation:"modal"
          }}/>
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderingScreen} options={{
            headerShown: false,
            presentation:"fullScreenModal"
          }}/>
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{
            headerShown: false,
            presentation:"fullScreenModal"
          }}/>
          <Stack.Screen name="MapScreen" component={MapScreen} />

        </Stack.Navigator>

      </Provider>

    </NavigationContainer>








  );
}


