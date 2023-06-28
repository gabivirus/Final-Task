import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import estilo from '../Style'

export default function Dear() {
  return (
    <View style={estilo.body}>
      <View style={estilo.header}>
        <Text style={estilo.title}>Dear</Text>
        <Text style={estilo.date}>12/01/2023</Text>
      </View>
      <Text style={estilo.content}>
        "Dear,\n\nI'm writing this note with a heavy heart, filled with regret. It pains me to admit that I made a hasty decision to discard you. You were once a cherished part of my life, holding memories and sentiments that I now deeply miss.\n\nIn a moment of impulsiveness, I let go of something valuable without fully appreciating its significance. I now realize the void your absence has created, and I deeply regret my actions. I yearn for the chance to turn back time and reconsider my choice.\n\nEvery day, I am reminded of the moments we shared, the laughter and tears, the connection we had. It's difficult to accept that I let it slip away, taking for granted the comfort and companionship you brought into my life.\n\nAs I reflect on my regret, I've learned a valuable lesson about the importance of treasuring what we have, nurturing relationships, and making thoughtful decisions. Your absence serves as a constant reminder of this lesson.\n\nThough I cannot undo the past, I hope to grow from this experience and approach future decisions with greater mindfulness. You will always hold a special place in my heart, and I am sorry for the pain I have caused by discarding you.\n\nWith sincere regret,\n"
      </Text>
    </View>
  );
}