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
        <Icon name="chevron-right" size={14} color="#9c64ce99" />
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
        <Icon name="chevron-right" size={14} color="#9c64ce99" />
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
    // flex: 1,
    backgroundColor: "#f6f6f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginBottom: 16,
    marginTop: 16,
    gap: 16,
    
  },
  item: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#e8c128bb",
    minWidth: "80%",
    borderRadius: 5,
    
  },
  itemDone: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#9c64ce60",
    minWidth: "80%",
    alignItems: "center",
    borderRadius: 5,
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 14,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
