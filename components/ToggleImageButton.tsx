import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ToggleImageButtonProps = {
    onPress: () => void;
};

export function ToggleImageButton({ onPress }: ToggleImageButtonProps) {
    return (
        <TouchableOpacity
            style={styles.toggleButton}
            onPress={onPress}
            accessibilityLabel="Alternar foto de perfil"
            accessibilityRole="button"
        >
            <Text style={styles.toggleButtonText}>Trocar Foto</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toggleButton: {
        paddingVertical: 8,
        paddingHorizontal: 22,
        backgroundColor: '#E8EAF6',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#3F51B5',
    },
    toggleButtonText: {
        color: '#3F51B5',
        fontSize: 14,
        fontWeight: '600',
    },
});
