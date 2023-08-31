import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
  }
})

export default Home;
