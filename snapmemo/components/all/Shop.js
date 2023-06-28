import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';

export default function Shop() {
  return(
    <View style={estilo.body}>
      <View style={estilo.header}>
        <Text style={estilo.title}></Text>
        <Text style={estilo.date}></Text>
      </View>
      <Text style={estilo.content}>
        
      </Text>
    </View>
  )
}

const estilo = StyleSheet.create({
  body:{

  },
  header:{

  },
  title:{

  },

  date:{

  },
  content:{

  }
})