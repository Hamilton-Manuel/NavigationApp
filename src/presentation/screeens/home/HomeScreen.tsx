import { Text, View } from "react-native"
import { Pressable } from "react-native-gesture-handler"
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import type { RootStackParams } from "../../routes/StackNavigator";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container }>

      {/* <Pressable
      onPress={ () => navigation.navigate('Products' as never)}
       style={globalStyles.primaryButton }>
      <Text style={globalStyles.buttonText }>Productos</Text>

      </Pressable>
         */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productosss"
        />
        <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
           label="sentigsss"
        />
        </View>
  )
}
