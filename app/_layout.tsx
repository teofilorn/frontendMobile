import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { PaperProvider, MD3LightTheme, Avatar } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const updatedFonts = Object.fromEntries(
    Object.entries(MD3LightTheme.fonts).map(([key, value]) => [
      key,
      { ...value, fontFamily: "Poppins_400Regular" },
    ])
  );
  return (
    <PaperProvider
      theme={{
        ...MD3LightTheme,
        colors: {
          ...MD3LightTheme.colors,
          primary: "#383838",
          secondary: "#fff",
          tertiary: "#4fafaf",
        },
        fonts: updatedFonts,
      }}
    >
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    </ThemeProvider> */}
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#4fafaf" },
          contentStyle: { backgroundColor: "#e5e5e5" },
          headerTintColor:"#fff",
          headerShadowVisible: false
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="clientArea/index"
          options={{
            headerLeft: (props) => (
              <>
                <Text variant="titleMedium" style={{ color: "#fff" }}>
                  Olá, [user] {"\n"}
                  <Text style={{ fontWeight: "bold", color: "#fff" }}>
                    seja bem vindo(a)!
                  </Text>
                </Text>
              </>
            ),
            title: "",
            headerRight: () => (
              <Avatar.Image
                size={30}
                source={require("../assets/images/avatar.png")}
              />
            ),
            
          }}
        />
        <Stack.Screen
          name="clientArea/certificates"
          options={{
            title: "Seus Certificados",
            
          }}
        />
        <Stack.Screen
          name="clientArea/services"
          options={{
            title: "Nossos serviços",
          }}
        />
        <Stack.Screen
          name="clientArea/register"
          options={{
            title: "Cadastro",
            headerRight: (props) => (<MaterialIcons name="logout" size={24} color={props.tintColor} />)
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
