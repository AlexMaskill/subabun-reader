import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryScreen from './screens/LibraryScreen';
import ReaderScreen from './screens/ReaderScreen';
import SettingsScreen from './screens/SettingsScreen';

type RootStackParamList = {
  Library: undefined;
  Reader: { book: any }; // Replace 'any' with your Book type if you have one
  Settings: undefined;
};

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Library">
//         <Stack.Screen name="Library" component={LibraryScreen} />
//         <Stack.Screen name="Reader" component={ReaderScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }