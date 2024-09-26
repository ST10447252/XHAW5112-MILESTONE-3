import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Account from './screens/Account';
import OfferPage from './screens/OfferPage';
import SixMonth from './screens/CourseSummary/SixMonth';
import SixWeek from './screens/CourseSummary/SixWeek';
import FirstAid from './screens/Courses/FirstAid';
import ChildMinding from './screens/Courses/ChildMinding';
import Cooking from './screens/Courses/Cooking';
import GardenMaintenance from './screens/Courses/GardenMaintenance';
import Landscaping from './screens/Courses/Landscaping';
import Lifeskills from './screens/Courses/Lifeskills';
import Sewing from './screens/Courses/Sewing';
import Checkout from './screens/Checkout';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='SixWeek' component={SixWeek} options={{ headerShown: false }} />
        <Stack.Screen name='SixMonth' component={SixMonth} options={{ headerShown: false }} />
        <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
        <Stack.Screen name='OfferPage' component={OfferPage} options={{ headerShown: false }} />
        <Stack.Screen name='Childminding' component={ChildMinding} options={{ headerShown: false }} />
        <Stack.Screen name='Cooking' component={Cooking} options={{ headerShown: false }} />
        <Stack.Screen name='FirstAid' component={FirstAid} options={{ headerShown: false }} />
        <Stack.Screen name='Gardenmaintenance' component={GardenMaintenance} options={{ headerShown: false }} />
        <Stack.Screen name='Landscaping' component={Landscaping} options={{ headerShown: false }} />
        <Stack.Screen name='Lifeskills' component={Lifeskills} options={{ headerShown: false }} />
        <Stack.Screen name='Sewing' component={Sewing} options={{ headerShown: false }} />
        <Stack.Screen name='Checkout' component={Checkout} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
