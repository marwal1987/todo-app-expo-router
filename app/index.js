import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const image = require('../assets/images/todo.jpg');

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={4}>
        <Text style={styles.largeText}>GET WORK DONE!</Text>
        <Text style={styles.mediumText}>Structure your day!</Text>
        <CustomButton bgColor="#e8c128" width={`50%`} rounded={50} onPress={() => router.push("/home")}>Make a todo-list</CustomButton >
      </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  largeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#222",
  },
  mediumText: {
    fontSize: 24,
    color: "#222",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: "center",
    gap: 48,
    
  },
});
