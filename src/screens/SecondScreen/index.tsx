import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator, FlatList, ScrollView, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native';
import { Section } from '../../components/section/Section';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import axios from 'axios';

type SecondScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SecondScreen'>;

const SecondScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState();
    const navigation = useNavigation<SecondScreenNavigationProp>();
    useEffect(() => {
        console.log('second screen montado');
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                console.log('la respuesta es:', response);
                setData(response.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

/*     if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#6C63FF" />
            </View>
        );
    } */
    if (error) {
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }
    
    if (!data) {
        return (
            <View>
                <Text>No hay datos</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, backgroundStyle]}>
                <Section
                    title="Lista de Pokemones"
                    description="Aqui podras ver la lista de pokemones"
                    isHeader
                />
                <ScrollView style={[styles.scrollView, backgroundStyle]} contentContainerStyle={styles.contentContainer}>
                    {data?.results.map((item: any) => (
                        <TouchableOpacity
                            key={item.name}
                            style={styles.item}
                            onPress={() => {
                                navigation.navigate('ThirdScreen', { url: item.url })
                                console.log('Navegando a:', item.url);

                            }}
                        >
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}     
                </ScrollView>

        </View>
    );
};


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        padding: 16,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: 'black',
        textTransform: 'capitalize',
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondScreen;