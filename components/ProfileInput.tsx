import { StyleSheet, TextInput } from 'react-native';

type ProfileInputProps = {
    value: string;
    onChangeText: (text: string) => void;
};

export function ProfileInput({ value, onChangeText }: ProfileInputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            placeholderTextColor="#9FA8DA"
            value={value}
            onChangeText={onChangeText}
            maxLength={60}
            accessibilityLabel="Campo de nome do usuário"
            returnKeyType="done"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 52,
        borderWidth: 1.5,
        borderColor: '#3F51B5',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#1A237E',
        backgroundColor: '#fff',
    },
});
