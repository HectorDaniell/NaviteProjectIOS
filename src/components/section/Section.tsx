import React from 'react';
import { StyleSheet, Text, useColorScheme, View, ViewStyle, TextStyle } from 'react-native';

type SectionProps = {
    title: string;
    description?: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    isHeader?: boolean;
};

export const Section = ({
    title,
    description,
    containerStyle,
    titleStyle,
    isHeader = false,
}: SectionProps): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    if (isHeader) {
        return (
            <View style={[styles.headerContainer, containerStyle]}>
                <Text style={[styles.headerTitle, titleStyle, { color: isDarkMode ? '#fff' : '#222' }]}>
                    {title}
                </Text>
                {description && (
                    <Text style={styles.headerDescription}>{description}</Text>
                )}
            </View>
        );
    }

    return (
        <View style={[styles.sectionContainer, containerStyle]}>
            <Text style={[styles.sectionTitle, titleStyle, { color: isDarkMode ? '#fff' : '#222' }]}>
                {title}
            </Text>
            {description && (
                <Text style={styles.sectionDescription}>{description}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 24,
        marginHorizontal: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: '#f2f2f2',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 4,
    },
    sectionDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#666',
    },
    // Estilos especiales para el header superior
    headerContainer: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 0,
        paddingTop: 40,
        paddingBottom: 24,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 4, // sombra en Android
        shadowColor: '#000', // sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 8,
    },
    headerDescription: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
});