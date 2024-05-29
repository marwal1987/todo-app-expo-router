import { useContext } from "react";
import { useRouter } from "expo-router";
import { TodosContext } from "../contexts/TodosContext";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const { todos } = useContext(TodosContext);
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: { id: item.id },
        })
      }
      style={styles.item}
    >
      <Text style={styles.mediumText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>ToDo's</Text>
      <Text style={styles.smallText}>Press [ + ] to add Todo</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    marginBottom: 16,
    marginTop: 16,
    gap: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ddd",
    minWidth: "70%",
    alignItems: "center",
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 14,
  },
});
