import { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
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

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>Todo deleted!</Text>
        <CustomLink bgColor="#9c64ce" width="55%" rounded={50} href={"/home"}>
          Back to home
        </CustomLink>
      </View>
    );
  }

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
            width="70%"
            rounded={50}
            onPress={markDone}
          >
            Mark as Done
          </CustomButton>
        ) : (
          <CustomButton
            bgColor="#e8c128"
            width="70%"
            rounded={50}
            onPress={markUndone}
          >
            Mark as Undone
          </CustomButton>
        )}
        <CustomButton
          bgColor="#dd4422"
          width="70%"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 48,
  },

  largeText: {
    fontSize: 36,
    fontFamily: "Handlee_400Regular",
  },
  mediumText: {
    fontSize: 18,
    maxWidth: "70%",
    fontFamily: "Handlee_400Regular",
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
