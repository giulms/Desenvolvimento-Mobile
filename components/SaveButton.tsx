import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type SaveButtonProps = {
    onPress: () => void;
};

export function SaveButton({ onPress }: SaveButtonProps) {
    return (
        <TouchableOpacity
            style={styles.saveButton}
            onPress={onPress}
            accessibilityLabel="Salvar perfil"
            accessibilityRole="button"
        >
            <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    saveButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#3F51B5',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        shadowColor: '#3F51B5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});
