import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../Caritem/styles'
import StyledButton from '../../components/StyledButton/index';

const CarItem = (props:any) =>{

    const {name, image, subTitles, subTitleCTA} = props.car


    return (
        <View style={styles.carContainer}>

        <ImageBackground source={image}style={styles.image}/>

        <View style={styles.titles}>

          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitles}>{subTitles} {''}
          <Text style={styles.subTitleCTA}>{subTitleCTA}</Text>
          </Text>

        </View>

      <View style={styles.buttonContainer}>
        <StyledButton type='primary'/>
        <StyledButton/>
      </View>

      </View>
    )
}


export default CarItem