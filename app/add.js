import { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";
import { TodosContext } from "../contexts/TodosContext";

export default function Add() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const { setTodos } = useContext(TodosContext);
  const router = useRouter();

  function addTodo() {
    if (text) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, description, done: false },
      ]);
      router.back();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Create Todo</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <CustomButton
        bgColor="#e8c128"
        width={`90%`}
        rounded={50}
        onPress={addTodo}
      >
        Done
      </CustomButton>
      <CustomButton
        bgColor="#9c64ce"
        width={`90%`}
        rounded={50}
        onPress={() => router.back()}
      >
        Dismiss
      </CustomButton>
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
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    width: "90%",
    fontFamily: "Handlee_400Regular",
    fontSize: 18,
  },
  largeText: {
    fontSize: 32,
    fontFamily: "Handlee_400Regular",
  },
});
