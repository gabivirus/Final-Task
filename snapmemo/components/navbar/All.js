import { FlatList, Text, View, StyleSheet, LinearGradient, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import AddButton from '../Functions';
import estilo from '../Style';

export default function All(props) {
  return (
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
  );
}

const notes = [
  {
    title: 'Artists',
    content: `Vincent van Gogh:
    Vincent van Gogh is one of my absolute fav artists. The dude's paintings are like explosions of color and emotion. Can't get enough of his beautiful brushstrokes and how he captured the essence of nature.

    Frida Kahlo:
    Frida Kahlo, she's a badass. Her self-portraits are like windows into her soul. I love how she expressed her pain and Mexican heritage through her art. And her use of bold colors? So freaking cool!

    Leonardo da Vinci:
    Leonardo da Vinci, the OG Renaissance man. He was all about painting, science, and even inventing crazy contraptions. Such a genius! His attention to detail blows my mind.

    Pablo Picasso:
    Picasso, the dude who messed with our heads in the best way possible. He broke all the rules and created his own style. From his realistic stuff to his mind-bending Cubist period, the guy was a true artistic rebel.

    Claude Monet:
    Monet's paintings are like a breath of fresh air. His brushstrokes capture the fleeting beauty of nature. Seriously, his art is so chill and soothing. It's like a peaceful escape from reality.

    Salvador Dali:
    Dali was one weird dude, and I love it. His surreal art takes you on a trip to a wild dreamland. The melting clocks and bizarre stuff he painted? It's like he had a direct line to his subconscious.

    Georgia O'Keeffe:
    O'Keeffe was all about capturing the essence of flowers and landscapes in a super sensual way. Her paintings are like visual poetry. They make me appreciate the beauty of nature on a whole new level.

    Michelangelo:
    Michelangelo was a freaking genius with a chisel. His sculptures are jaw-droppingly amazing, and his paintings are next level. The way he brought marble to life is mind-boggling. True artistry right there.

    Rembrandt:
    Rembrandt was the master of light and shadows. His portraits are so dang expressive. You can feel the emotions in the eyes of the people he painted. He was like the OG master of capturing character.

    Banksy:
    Banksy, the mysterious street art legend. The dude's work is pure brilliance. He uses art to challenge society and make us question everything. Plus, the fact that he's anonymous adds an extra layer of intrigue.`,
    date: '26/04/2023',
    link: 'Artist'
  },
  {
    title: 'Fair',
    content: "- Eggs: Gotta get me a dozen of those beauties. Can't start the day without some good ol' eggs for breakfast and baking.\n Milk: Need around 2 liters of the white stuff. Gotta keep my coffee and cereal game strong.\n Bread: A loaf of fresh bread, please! I'm all about those sammies and toasty goodness.\n Apples: Gimme like 6 of 'em. I like to have a variety for snacking and making killer apple pie.\n Chicken: I need around 500 grams of boneless chicken. Got a mouthwatering recipe in mind for dinner.\n Rice: Running low on rice, so let's grab a 2-kilogram pack. Gotta have my rice game on point.\nAdditional Items:\n- Pasta: Craving some pasta dishes lately, so let's stock up on around 500 grams. Time to whip up some tasty",
    date: '30/04/2021',
    link: 'Fair',
  },
  {
    title: 'Shop',
    content: '1. T-shirt\n2. Jeans\n3. Sneakers\n4. Watch\n5. Backpack\n6. Sunglasses\n7. Dress\n8. Jacket\n9. Hat\n10. Wallet\n11. Earrings\n12. Bracelet\n13. Perfume\n14. Phone case\n15. Laptop',
    date: '12/12/2021',
    link: 'Shop',
  },
]