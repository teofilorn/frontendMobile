import { Link } from "expo-router";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewArea}>
        <View style={styles.loginArea}>
          <Text variant="displaySmall" style={styles.displayText}>
            Entrar
          </Text>
          <TextInput label="Email" mode="outlined" />
          <TextInput label="Senha" mode="outlined" />
          <Link href={"/clientArea"} asChild>
          <Button mode="contained" style={styles.accessButton}>Acessar</Button>
          </Link>
          <Text style={styles.registerText}>Ainda não é cliente? <Text style={styles.linkText}>Entre em contato!</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#4fafaf" },
  logo: {
    width: "100%",
    height: 200,
  },
  viewArea: {
    display: "flex",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginArea: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
  },
  displayText: {
    fontFamily: "Poppins_400Regular",
    color: "#4E4E4E",
  },
  accessButton: {
    marginTop: 10
  },
  registerText: {
    textAlign: "center",
    marginTop: 20
  },
  linkText: {
    textDecorationLine: "underline"
  }
});
