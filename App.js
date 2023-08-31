import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./src/Views/Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
        <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
