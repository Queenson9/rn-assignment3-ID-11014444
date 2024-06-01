import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    name: "Exercise",
    tasks: "12 Tasks",
    image: require("./assets/training.png"),
  },
  {
    name: "Study",
    tasks: "2 Tasks",
    image: require("./assets/presentation.png"),
  },
  { name: "Code", tasks: "4 Tasks", image: require("./assets/study.png") },
  { name: "Reading", tasks: "4 Tasks", image: require("./assets/reading.png") },
  { name: "Cook", tasks: "4 Tasks", image: require("./assets/cooking.png") },
  {
    name: "Work",
    tasks: "4 Tasks",
    image: require("./assets/working.png"),
  },
  {
    name: "Cleaning",
    tasks: "4 Tasks",
    image: require("./assets/mop.png"),
  },
  {
    name: "Shopping",
    tasks: "4 Tasks",
    image: require("./assets/shopping-cart.png"),
  },
];

const tasks = [
  "Exercise - Morning run",
  "Exercise- Gym session",
  "Study- Math homework",
  "Study- Read history chapter",
  "Code- Fix bug in project",
  "Code- Implement new feature",
  "Cook- Prepare lunch",
  "Cook- Bake cookies",
  "Work- Finish report",
  "Work- Team meeting",
  "Shopping- Buy groceries",
  "Shopping- Get new shoes",
  "Cleaning- Vacuum living room",
  "Cleaning- Laundry",
  "Reading- Finish novel",
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskInfo}>14 tasks today</Text>
        </View>
        <View style={styles.userIcon}>
          <Image source={require("./assets/person.png")} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          <FontAwesomeIcon size={20} icon={faMagnifyingGlass} />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.filter}>
          <FontAwesomeIcon size={30} color="#fff" icon={faSliders} />
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.itemTitle}>{category.name}</Text>
              <Text>{category.tasks}</Text>
              <Image style={styles.itemImage} source={category.image} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.taskTitle}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <ScrollView style={styles.tasks}>
          {tasks.map((task, index) => (
            <View style={styles.task} key={index}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    padding: 20,
  },
  intro: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    backgroundColor: "#FBF9F7",
    borderRadius: 50,
    padding: 2,
  },
  greeting: {
    fontSize: 34,
    fontWeight: "bold",
  },
  taskInfo: {
    fontSize: 16,
    color: "#555",
  },
  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBF9F7",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  filter: {
    marginLeft: 16,
    backgroundColor: "#F0522F",
    borderRadius: 10,
    padding: 10,
  },
  categories: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    width: 150,
    backgroundColor: "#FBF9F7",
    borderRadius: 20,
    padding: 15,
    marginRight: 20,
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  taskTitle: {
    marginTop: 20,
    flex: 1,
  },
  tasks: {
    marginTop: 10,
  },
  task: {
    backgroundColor: "#FBF9F7",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    borderColor: "#E8D1BA",
    borderWidth: 1,
  },
  taskText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
