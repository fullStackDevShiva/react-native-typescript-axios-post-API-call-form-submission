import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddCourseForm from "./components/AddCourseForm";
import ListCourses from "./components/ListCourses";
import { useState } from "react";

export default function App() {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const formDisplayHandle = () => {
    if (showAddForm === false) {
      setShowAddForm(true);
    } else {
      setShowAddForm(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showAddForm === false ? (
        <>
          <View style={styles.card_add_btn}>
            <TouchableOpacity
              style={styles.add_btn}
              onPress={formDisplayHandle}
            >
              <Text style={styles.add_btn_txt}>+ Add Course</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleTxt}>All Courses</Text>
          <ListCourses />
        </>
      ) : (
        <AddCourseForm formDisplayHandle={formDisplayHandle} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  card_add_btn: {
    width: "100%",
    backgroundColor: "#ECF2FF",
    borderColor: "#341f97",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 25,
    paddingVertical: 10,
  },
  add_btn: {
    width: "auto",
    backgroundColor: "transparent",
    padding: 0,
  },
  add_btn_txt: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
    alignSelf: "center",
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
});
