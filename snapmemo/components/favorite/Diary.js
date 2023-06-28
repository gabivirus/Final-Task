import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import estilo from '../Style';

export default function Diary() {
  return (
    <View style={estilo.body}>
      <View style={estilo.header}>
        <Text style={estilo.title}>Diary</Text>
        <Text style={estilo.date}>8/1/2020</Text>
      </View>
      <Text style={estilo.content}>
        Dear Diary,\n Today was a whirlwind of adventures! I woke up early and decided to explore the nearby forest. The morning air was crisp, and the sunlight filtered through the trees, creating a magical ambiance. I walked along the winding trails, listening to the birds chirping and the rustle of leaves under my feet.\n\nAs I ventured deeper into the forest, I stumbled upon a hidden waterfall. The water cascaded down the rocks, creating a soothing melody. I couldn't resist the temptation and took a refreshing dip in the crystal-clear pool beneath the falls. It felt invigorating, like washing away all the worries of the world.\n\nAfter my little adventure, I headed to a quaint café in town. The aroma of freshly brewed coffee filled the air, and I treated myself to a delicious slice of homemade apple pie. It was the perfect reward after my morning escapade.\n\nIn the evening, I met up with some friends for a movie night. We watched a hilarious comedy that had us laughing uncontrollably. Sharing those moments with dear friends is truly priceless.\n\nNow, as I write this, I find solace in the pages of my diary. Reflecting on the day's experiences brings a sense of fulfillment and gratitude. Life is a beautiful journey, and each day is an opportunity for new adventures.\n\nUntil tomorrow,\n\nGabriel
      </Text>
    </View>
  );
}