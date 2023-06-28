import { Text, View, StyleSheet, FlatList, ScrollView, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import AddButton from '../Functions';
import estilo from '../Style';

export default function Favorite(props) {
  return(
    <View style={estilo.body}>
      <AddButton/>
      <FlatList
        data={notes}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => props.navigation.navigate(item.link)}>
            <View style={estilo.note}>
              <Text style={estilo.noteTitle}>
                {item.title}
              </Text>
              <View>
                <Text style={estilo.noteText} numberOfLines={13} ellipsizeMode="tail" >
                  { item.content }
                </Text>
              </View>
              <Text style={estilo.noteDate}>
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
      }/>
    </View>
  )
}

const notes = [
  {
    title: 'Diary',
    content: "Dear Diary,\n Today was a whirlwind of adventures! I woke up early and decided to explore the nearby forest. The morning air was crisp, and the sunlight filtered through the trees, creating a magical ambiance. I walked along the winding trails, listening to the birds chirping and the rustle of leaves under my feet.\n\nAs I ventured deeper into the forest, I stumbled upon a hidden waterfall. The water cascaded down the rocks, creating a soothing melody. I couldn't resist the temptation and took a refreshing dip in the crystal-clear pool beneath the falls. It felt invigorating, like washing away all the worries of the world.\n\nAfter my little adventure, I headed to a quaint café in town. The aroma of freshly brewed coffee filled the air, and I treated myself to a delicious slice of homemade apple pie. It was the perfect reward after my morning escapade.\n\nIn the evening, I met up with some friends for a movie night. We watched a hilarious comedy that had us laughing uncontrollably. Sharing those moments with dear friends is truly priceless.\n\nNow, as I write this, I find solace in the pages of my diary. Reflecting on the day's experiences brings a sense of fulfillment and gratitude. Life is a beautiful journey, and each day is an opportunity for new adventures.\n\nUntil tomorrow,\n\nGabriel",
    date: '8/1/2020',
    link: 'Diary',
  },
  {
    title: 'English',
    content: "Hello,\nToday, I focused on expanding my English vocabulary, discovering interesting words like serendipity, quintessential, eloquent, panacea, and mellifluous.\nExpanding my vocabulary opens up endless possibilities in effective expression.\nThat's all for today!",
    date: '27/01/2023',
    link: 'English'
  }
];