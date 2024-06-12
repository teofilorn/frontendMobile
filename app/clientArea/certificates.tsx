import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
export default function Certificates() {
  const [filter, setFilter] = useState();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.extraHeader}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}
          style={styles.pickerStyles}
        >
          <Picker.Item label="Tipo 1" value="1" />
          <Picker.Item label="Tipo 2" value="2" />
          <Picker.Item label="Tipo 3" value="3" />
        </Picker>
        <IconButton
          icon={({ color, size }) => (
            <Feather name="upload-cloud" size={size} color={color} />
          )}
          size={20}
          iconColor="#fff"
          style={{ width: 35 }}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Array(40)
            .fill("")
            .map((_, i) => i + 1)}
          renderItem={(el) => (
            <TouchableOpacity style={styles.certificatesBtn}>
              <Text style={{ color: "#4e4e4e" }}>Certificado {el.item}</Text>
              <Text variant="labelSmall" style={{ color: "#4e4e4e" }}>
                12/04/2024 até 11/07/2024
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  extraHeader: {
    backgroundColor: "#4fafaf",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerStyles: {
    width: 130,
    color: "#fff",
  },
  certificatesBtn: {
    marginHorizontal: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#9e9e9e",
  },
});
