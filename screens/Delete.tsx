import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image, ScrollView, Modal,FlatList} from "react-native";
import { obj } from "../services/objecttest";
import {deleteDataByMssv,getDataByMssv} from "../services/interfaces/authentication";

const Delete = ({ navigation }) => {
  const studentMssv = navigation.getParam("studentMssv");
  const [student, setStudent] = useState<obj[]>([]);

  const deleteStudent = async () => {
    try {
      await deleteDataByMssv(studentMssv);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  const getDataStudent = async (mssv: string) => {
    try {
      const { data } = await getDataByMssv(mssv);
      // console.log(data);

      const data2List = [data];
      // console.log(data2List);

      setStudent(data2List);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getDataStudent(studentMssv);
  }, [studentMssv]);

  const render = ({ item }: { item: obj }) => {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.text}>Tên sinh viên</Text>
          <Text style={styles.textinput}>{item.name}</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.textinput}>{item.email}</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Mã số sinh viên</Text>
          <Text style={styles.textinput}>{item.mssv}</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Địa chỉ</Text>
          <Text style={styles.diachi}>{item.addr}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={student} renderItem={(item) => render(item)} />
      <View style={styles.input}>
        <Text style={styles.texttouch} onPress={deleteStudent}>
          Xóa sinh viên
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textinput: {
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "700",
  },
  diachi: {
    height: 100,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    textAlignVertical: "top",
    paddingHorizontal: 10,
  },
  texttouch: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Delete;
