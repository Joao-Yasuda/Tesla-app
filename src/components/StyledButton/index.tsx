import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';
import styles from './style';

const StyledButton=(props:any) =>{

  const type =props.type

  const backgroundColor = type === 'primary' ? '#3E4145' : '#E7E5E4'

  const color = type === 'primary' ? '#E7E5E4' : '#3E4145'

  const text = type === 'primary' ? 'Custom Order' : 'Existing Inventory'

  return (
    <View style={styles.container}>

        <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={()=>{
            console.warn('hi there')
        }}
        > 
            <Text style={[styles.text, {color:color}]}>{text}</Text>

        </Pressable>

    </View>
  );
}

export default StyledButton