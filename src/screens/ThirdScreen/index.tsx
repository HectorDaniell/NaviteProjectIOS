import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Section } from '../../components/section/Section'
import { useRoute } from '@react-navigation/native';

const ThirdScreen = () => {
    const route = useRoute();
    const { url } = route.params as { url: string };
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!url) {
                    console.log('URL no definida');
                    return;
                }
                console.log('la url es:', url);
                const response = await fetch(url);
                console.log('la respuesta es:', response);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log('ERROR:', error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    setTimeout(() => {
        if (loading) {
            console.log('La petición está tardando demasiado o quedó colgada');
        }
    }, 5000);

    return (
        <View style={styles.container}>
            <Section title={url} description={url} isHeader />
            <Text style={styles.textInfo}>base_experience: {data?.base_experience}</Text>
            <Text style={styles.textInfo}>height: {data?.height}</Text>
            <Text style={styles.textInfo}>weight: {data?.weight}</Text>
            <Text style={styles.textInfo}>abilities: {data?.abilities.map((ability: any) => ability.name).join(', ')}</Text>
            <Text style={styles.textInfo}>types: {data?.types.map((type: any) => type.name).join(', ')}</Text>
            <Text style={styles.textInfo}>stats: {data?.stats.map((stat: any) => stat.name).join(', ')}</Text>
            <Text style={styles.textInfo}>moves: {data?.moves.map((move: any) => move.name).join(', ')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    textInfo: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
});


export default ThirdScreen