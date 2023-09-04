import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { FC } from 'react'
import { PostImage } from '../../Types'

const TodaysImage:FC<PostImage> = ({date, title, url}) => {
  return (
    <View >
      <View >
        <Image source={{uri: url}} style={styles.image}/>
      </View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Button title='View'/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: 200,
  }
})

export default TodaysImage