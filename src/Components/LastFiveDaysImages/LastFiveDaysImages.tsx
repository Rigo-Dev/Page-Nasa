import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { FC } from "react";
import { PostImage as PostImageTypes } from "../../Types";
import PostImage from "../PostImage/PostImage";

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({postImages}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImages =>(
          <PostImage key={`post-image-${postImages.title}`} {...postImages}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;
