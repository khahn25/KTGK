import React, { useState } from "react";
import {View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image, ScrollView, Modal, Button,} from "react-native";
import { obj } from "../services/objecttest";
import { postData } from "../services/interfaces/authentication";
import { validateEmail, validateMssv, validateName } from "../utils/validate";

const Add = ({ navigation }) => {
  const [object, setObject] = useState<obj>({
    id: "",
    name: "",
    email: "",
    mssv: "",
    addr: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDelete = () => {
    // chuyển màn
    navigation.navigate("Home");
    toggleModal();
  };

  const addStudent = async () => {
    if (
      validateName(object.name) &&
      validateEmail(object.email) &&
      validateMssv(object.mssv)
    ) {
      try {
        const { data } = await postData(object);
        // console.log(object);

        navigation.navigate("Home");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}> Tên sinh viên</Text>
        <TextInput
          style={styles.textinput}
          value={object.name}
          onChangeText={(value) => {
            setObject({
              ...object,
              name: value,
            });
          }}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}> Email</Text>
        <TextInput
          style={styles.textinput}
          value={object.email}
          onChangeText={(value) => {
            setObject({
              ...object,
              email: value,
            });
          }}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}> Mssv</Text>
        <TextInput
          style={styles.textinput}
          value={object.mssv}
          onChangeText={(value) => {
            setObject({
              ...object,
              mssv: value,
            });
          }}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}> Địa chỉ</Text>
        <TextInput
          style={styles.diachi}
          multiline={true}
          value={object.addr}
          onChangeText={(value) => {
            setObject({
              ...object,
              addr: value,
            });
          }}
        />
      </View>
      <View style={styles.input}>
        <View style={styles.foot}>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.texttouch}>Hủy bỏ</Text>
          </TouchableOpacity>
          <Button title="Lưu lại" onPress={addStudent}></Button>
        </View>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          presentationStyle="overFullScreen" // Đặt presentationStyle
          transparent={true} // Đặt transparent thành true
          onRequestClose={toggleModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF9900",
            }}
          >
            <View>
              <Text>Bạn có chắc muốn hủy không?</Text>
              <TouchableOpacity onPress={handleDelete}>
                <Text>Có</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text>Không</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    borderWidth: 1,
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
  foot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Add;
