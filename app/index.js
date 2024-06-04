import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CustomLink from "../components/CustomLink";

const image = require("../assets/images/todo.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={6}>
        <Text style={styles.largeText}>"GET SHIT DONE!"</Text>
        <Text style={styles.mediumText}>
          The best defense against chaos is a daily planning ritual.
        </Text>
        <Text style={styles.mediumText}>
          Structure your day!
        </Text>

        <CustomLink bgColor="#e8c128" width="200px" rounded={50} href={"/home"}>
          Create a todo-list
        </CustomLink>
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
    fontFamily: "Handlee_400Regular",
    fontWeight: "bold",
    color: "#000",
    maxWidth: "80%",
    textAlign: "center",
  },
  mediumText: {
    fontSize: 24,
    color: "#222",
    fontFamily: "Handlee_400Regular",
    maxWidth: "80%",
    textAlign: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    gap: 72,
  },
});
