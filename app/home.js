import { useContext } from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { TodosContext } from "../contexts/TodosContext";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";

export default function Home() {
  const { todos } = useContext(TodosContext);
  const router = useRouter();

  const notDoneTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  function renderNotDoneTodos({ item }) {
    return (
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
        <Icon name="chevron-right" size={14} color="#9c64ce88" />
      </TouchableOpacity>
    );
  }

  function renderDoneTodos({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/detail",
            params: { id: item.id },
          })
        }
        style={styles.itemDone}
      >
        <Text style={[styles.mediumText, styles.doneText]}>{item.text}</Text>
        <Icon name="chevron-right" size={14} color="#e8c128" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>ToDo</Text>
      <FlatList
        data={notDoneTodos}
        renderItem={renderNotDoneTodos}
        keyExtractor={(item) => item.id.toString()}
      />
      <SectionList
        sections={[{ title: "Completed", data: doneTodos }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoneTodos}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.largeText}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 48,
    gap: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#e8c12899",
    minWidth: "80%",
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#9c64ce55",
  },
  itemDone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#9c64ce88",
    minWidth: "80%",
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#e8c12888",
  },
  largeText: {
    fontSize: 32,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Handlee_400Regular",
  },
  mediumText: {
    fontSize: 18,
    fontFamily: "Handlee_400Regular",
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
