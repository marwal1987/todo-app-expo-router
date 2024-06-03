import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { TodosProvider } from "../contexts/TodosContext";
import Icon from "react-native-vector-icons/FontAwesome";
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
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded || showBackground) {
    return (
      <ImageBackground source={image} style={styles.image}>
        
      </ImageBackground>
    );
  }

  return (
    <TodosProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e8c128",
          },
          headerTintColor: "#222",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Home",
            headerRight: () => (
              <CustomLink
                bgColor="#9c64cedd"
                py={12}
                px={8}
                rounded={50}
                href={"/add"}
              >
                <Icon name="plus" size={15} color="#e8c128" />
              </CustomLink>
            ),
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
