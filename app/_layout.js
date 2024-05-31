import { Stack } from "expo-router";
import { TodosProvider } from "../contexts/TodosContext";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomButton"
import { useRouter } from "expo-router";
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';

export default function RootLayout() {
  const router = useRouter();

 useFonts({
    Handlee_400Regular,
  });

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
              <CustomButton bgColor="#9c64ce" py={12} px={8} rounded={50}
              onPress={() => router.push("/add")}>
                <Icon name="plus" size={15} color="#222222aa" />
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
