import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  body: {
    margin: 25,
    backgroundColor: '#f0f0f0'
  },
  note:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
  },
  noteTitle:{
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10
  },
  noteText:{
    color: '#000000aa',
    padding: 10
  },
  noteDate:{
    color: 'steelblue',
    textAlign: 'right',
    fontSize: 11,
    fontWeight: 500,
    marginVertical: 10
  },

  header:{
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 30,
    fontWeight: 600
  },
  date:{
    fontSize: 14
  },
  content:{
    fontSize: 16,
    fontWeight: 600
  },
});

export default estilo;