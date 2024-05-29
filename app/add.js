import { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { TodosContext } from "./TodosContext";

export default function Add() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const { setTodos } = useContext(TodosContext);
  const router = useRouter();

  const addTodo = () => {
    if (text) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, description, done: false },
      ]);
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>New Todo</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter todo"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />
      <Button title="Done" onPress={addTodo} />
      <Button title="Dismiss" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "70%",
  },
  largeText: {
    fontSize: 24,
  },
  mediumText: {
    fontSize: 18,
  },
});