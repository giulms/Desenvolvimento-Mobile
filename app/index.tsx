import { BtnBack } from "@/components/BtnBack";
import { NewsItem } from "@/components/NewsItem";
import { mockNews } from "@/data/news";
import { useState } from "react";
import { FlatList, StyleSheet, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const theme = isDarkMode
    ? { backgroundColor: "#000", textColor: "#fff" }
    : { backgroundColor: "#fff", textColor: "#000" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: theme.backgroundColor,
        }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
        {showSecret && (
          <NewsItem
            title="Notícia Secreta: Tecnologia Avançada Revelada"
            date="2026-03-14"
            icon="visibility"
          />
        )}
        <FlatList
          data={mockNews}
          renderItem={({ item }) => (
            <NewsItem title={item.title} date={item.date} icon={item.icon} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{ flex: 1, width: "100%" }}
        />
        <BtnBack onPress={() => setShowSecret(!showSecret)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
});
