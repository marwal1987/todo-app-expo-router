import { Stack } from "expo-router";
import { TodosProvider } from "../contexts/TodosContext";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomButton"
import { Button } from "react-native";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
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
              <CustomButton color="#9c64ce"
              onPress={() => router.push("/add")}>
                <Icon name="plus" size={15} color="#222" />
              </CustomButton>
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
