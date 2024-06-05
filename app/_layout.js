import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { TodosProvider } from "../contexts/TodosContext";
import CustomLink from "../components/CustomLink";
import { useFonts, Handlee_400Regular } from "@expo-google-fonts/handlee";
import { StyleSheet, ImageBackground } from "react-native";

const image = require("../assets/images/todo.jpg");

export default function RootLayout() {
  const [showBackground, setShowBackground] = useState(true);

  const [fontsLoaded] = useFonts({
    Handlee_400Regular,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBackground(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded || showBackground) {
    return (
      <ImageBackground source={image} style={styles.image}></ImageBackground>
    );
  }

  return (
    <TodosProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e8c128",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Home",
            headerRight: () => <CustomLink href={"/add"}>Add</CustomLink>,
          }}
        />
        <Stack.Screen
          name="detail"
          options={{
            title: "Detail",
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            presentation: "modal",
            title: "New Todo",
          }}
        />
      </Stack>
    </TodosProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
});
