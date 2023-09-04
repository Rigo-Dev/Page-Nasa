import { View, Text, Button, StyleSheet } from "react-native";
import React, { FC } from "react";
import { PostImage as PostImagesTypes } from "../../Types";

const PostImage: FC<PostImagesTypes> = ({ title, date }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <View>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostImage;
