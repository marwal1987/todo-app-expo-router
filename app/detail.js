import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";
import { useLocalSearchParams } from "expo-router";
import { TodosContext } from "../contexts/TodosContext";
import { useRouter } from "expo-router";

export default function Detail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { todos, setTodos } = useContext(TodosContext);
  const todo = todos.find((t) => t.id === Number(id));

  function markDone() {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, done: true } : t))
    );
    router.push("/home");
  }

  function markUndone() {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, done: false } : t))
    );
    router.push("/home");
  }

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>Todo deleted!</Text>
        <CustomLink
          bgColor="#9c64ce"
          width={
            Platform.OS === "web"
              ? "300px"
              : isIpad
              ? width * 0.5 // Adjust width for iPad
              : width * 0.8
          } // Default width for mobile}
          rounded={50}
          href={"/home"}
        >
          Go back!
        </CustomLink>
      </View>
    );
  }

  function deleteTodo() {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.largeText, todo.done && styles.doneText]}>
          {todo.text}
        </Text>
        <Text style={[styles.mediumText, todo.done && styles.doneText]}>
          {todo.description}
        </Text>
      </View>
      <View style={styles.section}>
        {!todo.done ? (
          <CustomButton
            bgColor="#e8c128"
            width={
              Platform.OS === "web"
                ? "300px"
                : isIpad
                ? width * 0.5 // Adjust width for iPad
                : width * 0.8
            }
            rounded={50}
            onPress={markDone}
          >
            Mark as Done
          </CustomButton>
        ) : (
          <CustomButton
            bgColor="#e8c128"
            width={
              Platform.OS === "web"
                ? "300px"
                : isIpad
                ? width * 0.5 // Adjust width for iPad
                : width * 0.8
            }
            rounded={50}
            onPress={markUndone}
          >
            Mark as Undone
          </CustomButton>
        )}
        <CustomButton
          bgColor="#dd4422"
          width={
            Platform.OS === "web"
              ? "300px"
              : isIpad
              ? width * 0.5 // Adjust width for iPad
              : width * 0.8
          }
          rounded={50}
          onPress={deleteTodo}
          textColor="#f6f6f1"
        >
          Delete
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");
const isIpad = Platform.OS === "ios" && width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  largeText: {
    fontSize: 36,
    fontFamily: "Handlee_400Regular",
    textAlign: "center",
  },
  mediumText: {
    fontSize: 18,
    width:
      Platform.OS === "web"
        ? "300px"
        : isIpad
        ? width * 0.5 // Adjust width for iPad
        : width * 0.8, // Default width for mobile
    fontFamily: "Handlee_400Regular",
    textAlign: "center",
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
    textAlign: "center",
  },
});
