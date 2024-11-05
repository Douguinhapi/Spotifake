import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar, Button } from 'react-native';
import { Link } from 'expo-router'

export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.caixatitulo}>
                <Link href={'/cadastro/registro'} asChild>
                    <Pressable style={styles.link}>
                        <Text style={styles.text}>
                            Crie Sua Conta
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6959CD'
    },
})