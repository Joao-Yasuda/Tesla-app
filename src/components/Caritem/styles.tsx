import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  carContainer:{
    width:'100%',
    height:Dimensions.get('window').height
  },
  titles:{
    marginTop:'30%',
    width:'100%',
    alignItems:'center',
  },
  title:{
    fontSize:45,
    fontWeight:'600',
  },
  subTitles:{
    fontSize:15,
    fontWeight:'400',
  },
  image:{
    position:'absolute',
    resizeMode:'cover',
    width:'100%',
    height:'100%',
  },
  buttonContainer:{
    position:'absolute',
    bottom:50,
    width:'100%'
  },
  subTitleCTA:{
    textDecorationLine:'underline',
  
  }
});

export default styles