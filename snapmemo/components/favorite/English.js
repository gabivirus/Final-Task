import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function English() {
  return (
    <View style={estilo.body}>
      <View style={estilo.header}>
        <Text style={estilo.title}>English</Text>
        <Text style={estilo.date}>27/01/2023</Text>
      </View>
      <Text style={estilo.content}>
        Hello,Today, I focused on expanding my English vocabulary, discovering interesting words like serendipity, quintessential, eloquent, panacea, and mellifluous.Expanding my vocabulary opens up endless possibilities in effective expression.That's all for today!"
      </Text>
    </View>
  );
}
