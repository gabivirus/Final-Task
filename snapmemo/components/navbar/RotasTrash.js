import { createStackNavigator } from '@react-navigation/stack';

import Trash from './Trash';
import Dear from '../trash/Dear';

const Stack = createStackNavigator();

export default function RotasTrash() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trash"
        options={{ headerShown: false }}
        component={Trash}
      />
      <Stack.Screen name="Dear" component={Dear} />
    </Stack.Navigator>
  );
}
