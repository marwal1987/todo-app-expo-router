import { Stack } from "expo-router";
import { TodosProvider } from "./TodosContext";
import { Button } from "react-native";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
  return (
    <TodosProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#456789",
            },
            headerTintColor: "#ddd",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Home",
            headerRight: () => (
              <Button title=" + " onPress={() => router.push("/add")} />
            ),
            headerStyle: {
              backgroundColor: "#456789",
            },
            headerTintColor: "#ddd",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="detail"
          options={{
            title: "Detail",
            headerStyle: {
              backgroundColor: "#456789",
            },
            headerTintColor: "#ddd",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            presentation: "modal",
            title: "Add Todo",
            headerStyle: {
              backgroundColor: "#456789",
            },
            headerTintColor: "#ddd",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </TodosProvider>
  );
}
