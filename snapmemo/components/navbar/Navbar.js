import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import RotasFavorite from './RotasFavorite';
import RotasTrash from './RotasTrash';
import RotasAll from './RotasAll';

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="All"
        component={RotasAll}
        options={{
          tabBarIcon: () => <AntDesign name="inbox" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={RotasFavorite}
        options={{
          tabBarIcon: () => (
            <AntDesign name="staro" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Trash"
        component={RotasTrash}
        options={{
          tabBarIcon: () => <AntDesign name="delete" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
