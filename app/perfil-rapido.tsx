import { ProfileAvatar } from '@/components/ProfileAvatar';
import { ProfileInput } from '@/components/ProfileInput';
import { SaveButton } from '@/components/SaveButton';
import { ToggleImageButton } from '@/components/ToggleImageButton';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PROFILE_IMAGES = [
    'https://i.pravatar.cc/300?img=12',
    'https://i.pravatar.cc/300?img=47',
];

export default function PerfilRapido() {
    const [name, setName] = useState('');
    const [imageIndex, setImageIndex] = useState(0);


    const handleSave = () => {
        const trimmed = name.trim();
        if (!trimmed) {
            Alert.alert('Atenção', 'Por favor, insira um nome antes de salvar.');
            return;
        }
        Alert.alert('Perfil Salvo!', `Olá, ${trimmed}! Seu perfil foi salvo.`);
    };


    const toggleImage = () => {
        setImageIndex((prev) => (prev === 0 ? 1 : 0));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Perfil Rápido</Text>

                <ProfileAvatar uri={PROFILE_IMAGES[imageIndex]} />

                <ToggleImageButton onPress={toggleImage} />

                <ProfileInput value={name} onChangeText={setName} />

                <SaveButton onPress={handleSave} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F0F4FF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 28,
        gap: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A237E',
        marginBottom: 4,
    },
});
