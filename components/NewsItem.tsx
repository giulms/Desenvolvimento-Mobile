import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#FFA500",
  },
  icon: {
    marginRight: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
  },
});

export function NewsItem({
  title,
  date,
  icon,
}: {
  title: string;
  date: string;
  icon: string;
}) {
  const corBorda = "#f509f5";
  const corIcone = "#61b4e4";
  const corFundo = "#fbfbfa";

  return (
    <View style={[styles.container, { borderColor: corBorda, backgroundColor: corFundo }]}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            icon={icon}
            size={24}
            color={corIcone}
            style={styles.icon}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="calendar-today"
            size={20}
            color={corIcone}
            style={styles.icon}
          />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
