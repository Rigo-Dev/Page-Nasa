import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import fetchApi from "../../Utils/fetch";
import TodaysImage from "../../Components/TodaysImage/TodaysImage";
import { PostImage } from "../../Types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../Components/LastFiveDaysImages/LastFiveDaysImages";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])

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

    const loadLat5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");        
        
        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)

        setLastFiveDaysImages(lastFiveDaysImagesResponse );
      
      } catch (error) {
        console.log(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLat5DaysImage().catch(null);
  }, []);

  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default Home;
