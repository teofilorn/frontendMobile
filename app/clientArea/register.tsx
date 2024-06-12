import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Register() {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity style={styles.actionBtn}>
        <View style={styles.containerBtn}>
        <Text style={{ color: "#4e4e4e" }}>Meu Cadastro</Text>
        <FontAwesome5 name="user-check" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <View style={styles.containerBtn}>
        <Text style={{ color: "#4e4e4e" }}>Novo Cadastro</Text>
        <FontAwesome5 name="user-plus" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <View style={styles.containerBtn}>
        <Text style={{ color: "#4e4e4e" }}>Excluir Cadastro</Text>
        <FontAwesome5 name="user-minus" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    containerBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    actionBtn: {
      marginHorizontal: 15,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#9e9e9e",
    },
  });
  
