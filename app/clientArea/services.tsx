import { List, Text } from "react-native-paper";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function AccordionTitle({ title }: { title: string }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text variant="labelSmall">Saiba Mais +</Text>
    </View>
  );
}

export default function Services() {
  return (
    <View>
      <View style={styles.extraHeader}>
        <Text style={[styles.extraHeaderTitle, { fontWeight: "bold" }]}>
          Seja bem vindo!
        </Text>
        <Text style={styles.extraHeaderTitle}>conheça nossos serviços</Text>
      </View>

      <View style={styles.servicesCont}>
        <List.Section title="Serviços">
          <List.Accordion
            title={<AccordionTitle title="Desratização" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>

          <List.Accordion
            title={<AccordionTitle title="Controle de Pragas" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>

          <List.Accordion
            title={<AccordionTitle title="Limpeza de Caixa d'Águas e Cisternas" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>

          <List.Accordion
            title={<AccordionTitle title="Recarga de extintores" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>

        </List.Section>
        <List.Section title="Agende um Serviço ou Tire Suas Duvidas">
          <List.Accordion
            title="Chame no Whatsapp!"
            style={styles.accordions}
            right={() => (<FontAwesome5 name="whatsapp" size={20} color="#4ecb71" />)}
            expanded={false}
          >
            <List.Item title="" />
          </List.Accordion>

          <List.Accordion
            title={<AccordionTitle title="Números para Contato" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>

          <List.Accordion
            title={<AccordionTitle title="Nosso endereço" />}
            style={styles.accordions}
          >
            <List.Item title="item 1" />
            <List.Item title="item 2" />
            <List.Item title="item 3" />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  extraHeader: {
    backgroundColor: "#4fafaf",
  },
  extraHeaderTitle: {
    color: "#fff",
    textAlign: "center",
  },
  accordions: {
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 1,
    borderColor: "#9e9e9e",
    paddingVertical: 2
  },
  servicesCont: {
    marginHorizontal: 10,
  },
});
