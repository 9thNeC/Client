import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const WEB_URL = "http://10.0.2.2:5173/";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: WEB_URL }} style={{ flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
