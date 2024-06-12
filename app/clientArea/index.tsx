import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        resizeMode="contain"
        source={require("@/assets/images/banner.png")}
      />
      <Text variant="bodyMedium" style={styles.titleNav}>
        Navegação
      </Text>
      <View style={styles.navContainer}>
        <Link href="clientArea/certificates" asChild>
          <TouchableOpacity style={styles.buttonCont}>
            <View style={styles.buttonNav}>
              <FontAwesome6 name="medal" size={24} color="black" />
              <Text>Certificados</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="clientArea/services" asChild>
          <TouchableOpacity style={styles.buttonCont}>
            <View style={styles.buttonNav}>
              <FontAwesome6 name="screwdriver-wrench" size={24} color="black" />
              <Text>Serviços e Contatos</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="clientArea/register" asChild>
          <TouchableOpacity style={styles.buttonCont}>
            <View style={styles.buttonNav}>
              <FontAwesome6 name="user-plus" size={24} color="black" />
              <Text>Cadastro</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  banner: {
    width: "100%",
    height: 170,
  },
  titleNav: {
    marginTop: 5,
    color: "#4E4E4E",
  },
  navContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonCont: {
    paddingLeft: 10,
    paddingTop: 10,
    flexBasis: "50%",
  },
  buttonNav: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 10,
    height: 150,
  },
});
