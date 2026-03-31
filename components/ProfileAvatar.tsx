import { Image, StyleSheet, View } from 'react-native';

type ProfileAvatarProps = {
    uri: string;
};

export function ProfileAvatar({ uri }: ProfileAvatarProps) {
    return (
        <View style={styles.imageWrapper}>
            <Image
                source={{ uri }}
                style={styles.avatar}
                resizeMode="cover"
                accessibilityLabel="Foto de perfil do usuário"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 80,
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: '#3F51B5',
    },
});
