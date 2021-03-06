import { StyleSheet } from 'react-native';

const book = StyleSheet.create({
  container: {
    width: '100%'
  },
  items: {
    padding: 10,
    marginLeft: 16
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 25,
    marginTop: -10,
  },
  range: {
    opacity: 0.9,
  },

  descriptionOnImage: {
    color: 'black', 
    marginTop: 60,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    // opacity: 0.5,
    fontSize: 20,
    fontWeight: '600'
  },

  name: {
    fontSize: 40,
    fontWeight: '600'
  },

  author: {
    fontSize: 30,
    fontWeight: '600'
  },

  range: {
    fontSize: 17,
  },

});

export default book;




