import { StatusBar, View, StyleSheet } from "react-native";
import StackRoutes from "./router";


export default function App() {
  return (

    <View style={styles.container}>
      <StackRoutes />
      <StatusBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})