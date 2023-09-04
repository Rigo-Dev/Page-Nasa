import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";
import React, { FC } from "react";
import { PostImage } from "../../Types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  const onPress = () => {
    console.log(title);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Button title="View" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 23,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "white",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodaysImage;
