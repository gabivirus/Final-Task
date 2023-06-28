import { createStackNavigator } from '@react-navigation/stack';

import Favorite from './Favorite';
import Diary from '../favorite/Diary';
import English from '../favorite/English';

const Stack = createStackNavigator();

export default function RotasFavorite() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        options={{ headerShown: false }}
        component={Favorite}
      />
      <Stack.Screen name="Diary" component={Diary} />
      <Stack.Screen name="English" component={English} />
    </Stack.Navigator>
  );
}
