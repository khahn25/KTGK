import React, { useEffect, useState } from "react";
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Alert,FlatList,Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { obj } from "../services/objecttest";
import { getData } from "../services/interfaces/authentication";

const Home = ({ navigation }) => {
  const [student, setStudent] = useState<obj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const listData = async () => {
    setIsLoading(true);
    try {
      const listData = await getData();
      // console.log(listData);

      const { data } = listData;
      // console.log(data);

      setStudent(data);
    } catch (error) {
      alert(error.response);
    }
    setIsLoading(false);
  };

  useEffect(() => { listData() }, []);

  const renderData = ({ item }: { item: obj }) => {
    return (
      <TouchableOpacity
        style={{ borderBottomWidth: 1 }}
        onPress={() => {
          navigation.navigate("Delete", { studentMssv: item.id });
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.mssv}</Text>
        {/* <Text>{item.addr}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách sinh viên</Text>
        <TouchableOpacity>
          <Icon
            name="plus"
            style={styles.plus}
            onPress={() => {
              navigation.navigate("Add");
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.textinput} />
        <Button title="TÌm kiếm"></Button>
      </View>

      <FlatList
        onRefresh={listData}
        refreshing={isLoading}
        data={student}
        renderItem={(item) => renderData(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  plus: {
    fontSize: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  textinput: {
    borderWidth: 1,
    width: "70%",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
export default Home;
