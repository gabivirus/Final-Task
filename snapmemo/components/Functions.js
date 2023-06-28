import { FlatList, Text, View, StyleSheet, LinearGradient, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground,} from 'react-native';

const AddButton = () => {
  return(
  <TouchableOpacity style={{width: '100%', height: 50, backgroundColor: 'oldlace', zIndex: 10, bottom: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 3, borderColor: 'coral'}}>
    <Text style={{color: 'coral', fontSize: 30, fontWeight: 600}}>+</Text>
  </TouchableOpacity>
  );
};

export default AddButton;