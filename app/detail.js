import { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  const markDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, done: true } : t))
    );
    router.push("/home");
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>{todo.text}</Text>
      <Text style={styles.mediumText}>{todo.description}</Text>
      <Button style={styles.button} title="Mark as Done" onPress={markDone} />
      <Button color="#dd5555" title="Delete" onPress={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  largeText: {
    fontSize: 24,
  },
  mediumText: {
    fontSize: 16,
  },
});
