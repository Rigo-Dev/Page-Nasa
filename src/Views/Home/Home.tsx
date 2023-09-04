import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import fetchApi from "../../Utils/fetch";
import TodaysImage from "../../Components/TodaysImage/TodaysImage";
import { PostImage } from "../../Types";


const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    loadTodaysImage().catch(null);
  }, []);

  console.log(todaysImage);
  

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
