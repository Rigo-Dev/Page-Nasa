import { SafeAreaView, StyleSheet, View } from "react-native";
import Routes from "./src/Routes/Routes";


export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)"
  },
});
