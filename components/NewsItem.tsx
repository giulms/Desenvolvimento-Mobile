import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { type ComponentProps } from "react";
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
  theme,
}: {
  title: string;
  date: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
  theme: { backgroundColor: string; textColor: string };
}) {
  const corBorda = '#f509f5';
  const corIcone = '#61b4e4';

  return (
    <View style={[styles.container, { borderColor: corBorda, backgroundColor: theme.backgroundColor }]}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name={icon}
            size={30}
            color={corIcone}
            style={styles.icon}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 41 }}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
