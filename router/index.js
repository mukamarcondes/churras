import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../src/components/Inicial';
import Carnes from '../src/components/Carnes';
import Pessoas from '../src/components/Opcoes';
import Opcoes from '../src/components/Pessoas';
import BoiImage from '../src/components/img_do_Boi';



const Stack = createNativeStackNavigator();


export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicial' >
                <Stack.Screen name="Inicial" component={Inicial} options={confgHeader} />
                <Stack.Screen name="Pessoas" component={Pessoas} options={confgPessoas} />
                <Stack.Screen name="Opcoes" component={Opcoes} options={confgPessoas} />
                {/* <Stack.Screen name="Carnes" component={Carnes} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const confgHeader = {
    headerShown: false
}
const confgPessoas = {
    headerTitle: () => <BoiImage />,
    headerTintColor: '#ff9900',
    headerStyle: {
        backgroundColor: '#1c1b1b',
        borderBottomColor: '#1c1b1b'
    },
}
