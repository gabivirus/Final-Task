import { createStackNavigator } from '@react-navigation/stack';

import All from './All';
import Artist from '../all/Artists';
import Fair from '../all/Fair';
import Shop from '../all/Shop';

const Stack = createStackNavigator();

export default function RotasAll() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="All"
        options={{ headerShown: false }}
        component={All}
      />
      <Stack.Screen name="Artist" component={Artist} />
      <Stack.Screen name="Fair" component={Fair} />
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
}
