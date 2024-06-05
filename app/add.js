import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
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
        width={
          Platform.OS === "web" ? "300px" : isIpad ? width * 0.5 : width * 0.8
        }
        rounded={50}
        onPress={addTodo}
      >
        Done
      </CustomButton>
      <CustomButton
        bgColor="#9c64ce"
        width={
          Platform.OS === "web" ? "300px" : isIpad ? width * 0.5 : width * 0.8
        }
        rounded={50}
        onPress={() => router.back()}
      >
        Dismiss
      </CustomButton>
    </View>
  );
}

const { width } = Dimensions.get("window");
const isIpad = Platform.OS === "ios" && width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 24,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 16,
    width:
      Platform.OS === "web"
        ? "300px" // Adjust width for Web
        : isIpad
        ? width * 0.5 // Adjust width for iPad
        : width * 0.8, // Default width for mobile
    fontFamily: "Handlee_400Regular",
    fontSize: 18,
  },
  largeText: {
    fontSize: isIpad ? 48 : 36,
    fontFamily: "Handlee_400Regular",
    textAlign: "center",
  },
});
