import { useContext } from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { TodosContext } from "../contexts/TodosContext";
import CustomLink from "../components/CustomLink";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  SectionList,
  Dimensions,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");
const isIpad = Platform.OS === "ios" && width >= 768 && height >= 1024;

export default function Home() {
  const { todos } = useContext(TodosContext);
  const router = useRouter();

  const notDoneTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  function renderNotDoneTodos({ item }) {
    return (
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/detail",
            params: { id: item.id },
          })
        }
        style={styles.item}
      >
        <Text style={styles.mediumText}>{item.text}</Text>
        <Icon name="chevron-right" size={14} color="#9c64cedd" />
      </Pressable>
    );
  }

  function renderDoneTodos({ item }) {
    return (
      <Pressable
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
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {notDoneTodos.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.largeText}>Nothing more to do!</Text>
          <CustomLink
                bgColor="#9c64ce"
                py={8}
                px={12}
                rounded={50}
                href={"/add"}
              >
                <Icon name="plus" size={15} color="#e8c128" />
              </CustomLink>
        </View>
      ) : (
        <>
        <Text style={styles.largeText}>ToDo</Text>
        <FlatList
          data={notDoneTodos}
          renderItem={renderNotDoneTodos}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
        </>
      )}
      <SectionList
        sections={[{ title: "Completed", data: doneTodos }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoneTodos}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.largeText}>{title}</Text>
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
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
  list: {
    width: "100%",
  },
  listContent: {
    alignItems: "center",
  },
  item: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#e8c12899",
    width:
      Platform.OS === "web"
        ? "300px"
        : isIpad
        ? width * 0.6 // Adjust width for iPad
        : width * 0.8, // Default width for mobile
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#9c64ce88",
  },
  itemDone: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: "#9c64ce88",
    width:
      Platform.OS === "web"
        ? "300px"
        : isIpad
        ? width * 0.6 // Adjust width for iPad
        : width * 0.8, // Default width for mobile
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#e8c12888",
  },
  largeText: {
    fontSize: 36,
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
