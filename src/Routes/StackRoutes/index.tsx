import { createNativeStackNavigator,NativeStackNavigationProp} from "@react-navigation/native-stack";

import Home from "../../Pages/Home";
import Categorys from "../../Pages/Categorys";

import { background } from "../../DefaultColors";


type ScreenNavigation = {
    Home: undefined;
    Categorys: undefined;
    
}

export type ScreenTypes = NativeStackNavigationProp<ScreenNavigation>;
export default function StackRoutes({props}){
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Categorys" component={Categorys} options={{
                headerStyle:{backgroundColor: background},
                headerTintColor: '#FFF',
                title:''
            }}/>
        </Stack.Navigator>
        )
}