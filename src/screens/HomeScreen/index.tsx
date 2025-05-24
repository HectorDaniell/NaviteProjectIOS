import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
/* components */
import { Section } from '../../components/section/Section';

const DATA = [
    { id: '1', name: 'Manzana' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Naranja' },
];

function HomeScreen(): React.JSX.Element {
    /* configuracion de theme */
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [input, setInput] = useState('');
    const [items, setItems] = useState(DATA);

    const addItem = () => {
        if (input.trim() !== '') {
            setItems([...items, { id: Date.now().toString(), name: input }]);
            setInput('');
        }
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    /* render contenido */
    return (
        <View style={[styles.container, backgroundStyle]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <View style={[styles.contentContainer, backgroundStyle]}>
                <Section
                    title="¡Bienvenido!"
                    description="Aqui podras agregar frutas a tu lista del supermercado"
                    isHeader
                />                
                <Text style={styles.title}>Lista de Frutas</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Agrega una fruta"
                    value={input}
                    onChangeText={setInput}
                />
                <Button title="Agregar" onPress={addItem} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => removeItem(item.id)}>
                            <View style={styles.item}>
                                <Text style={styles.itemText}>{item.name}</Text>
                                <Text style={styles.removeText}>Eliminar</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    style={styles.list}
                />
                <Text style={styles.info}>Toca una fruta para eliminarla</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentContainer: {
        paddingHorizontal: '5%',
        paddingBottom: '5%',
    },
    highlight: {
        fontWeight: '700',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        backgroundColor: '#fff',
    },
    list: {
        marginTop: 16,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e0e0e0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    itemText: {
        fontSize: 18,
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
    },
    info: {
        marginTop: 24,
        color: '#888',
        textAlign: 'center',
    },
});

export default HomeScreen; 