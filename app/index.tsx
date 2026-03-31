import { BtnBack } from '@/components/BtnBack';
import { NewsItem } from '@/components/NewsItem';
import { mockNews } from '@/data/news';
import { router, type Href } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const theme = isDarkMode
    ? { backgroundColor: '#000', textColor: '#fff' }
    : { backgroundColor: '#fff', textColor: '#000' };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: theme.backgroundColor,
        }}
      >
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/perfil-rapido' as Href)}
          accessibilityLabel="Ir para Perfil Rápido"
          accessibilityRole="button"
        >
          <Text style={styles.navButtonText}>Perfil Rápido</Text>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          {showSecret && (
            <NewsItem
              title="Notícia Secreta: Disco Voador Encontrado no Recife"
              date="2026-03-14"
              icon="visibility"
              theme={theme}
            />
          )}
          {mockNews.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              date={item.date}
              icon={item.icon}
              theme={theme}
            />
          ))}
        </ScrollView>
        <BtnBack onPress={() => setShowSecret(!showSecret)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navButton: {
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#3F51B5',
    borderRadius: 12,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});
