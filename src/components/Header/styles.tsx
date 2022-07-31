import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position:'absolute',
    zIndex:100,
    top:50,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:20,
  },
  logo:{
    width:100,
    height:25,
    resizeMode:'contain'
  },
  menu:{
    width:30,
    height:30,
  }

});