import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const image = require('../assets/images/todo.jpg');

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={6}>
        <Text style={styles.largeText}>"GET SHIT DONE!"</Text>
        <Text style={styles.mediumText}>The best defense against chaos is a daily planning ritual. Structure your day!</Text>

        <CustomButton bgColor="#e8c128" width={`50%`} rounded={50} onPress={() => router.push("/home")}>Create a todo-list</CustomButton >
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
    fontFamily: 'Handlee_400Regular',
    fontWeight: "bold",
    color: "#000",
    maxWidth: "80%",
  },
  mediumText: {
    fontSize: 24,
    color: "#222",
    fontFamily: 'Handlee_400Regular',
    maxWidth: "80%",
    textAlign: "center",
    alignSelf: "",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: "center",
    gap: 72,
    
  },
});
