import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen } from '../screeens/products/ProductScreen';
import { HomeScreen } from '../screeens/home/HomeScreen';
import { SettingsScreen } from '../screeens/settings/SettingsScreen';
import { ProductsScreen } from '../screeens/products/ProductsScreen';

export type RootStackParams ={
  Home: undefined,
  Product: {id : number, name: string},
  Products: undefined,
  Settings: undefined,
  
}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
        }
    } }>
    <Stack.Screen name="Home"component={HomeScreen} />
    <Stack.Screen name="Product"component={ProductScreen} />
    <Stack.Screen name="Products"component={ProductsScreen} />
    <Stack.Screen name="Settings"component={SettingsScreen} />
    
    </Stack.Navigator>

  );
}