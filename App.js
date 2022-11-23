import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBottomStack from './src/components/Navigation/BottomTab';
import axios from 'axios'

export default function App() {

    const [data, setData] = useState([])
    const [identificacion, setIdentificacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [total, seTotal] = useState('')
    const [isLoading, setLoading] = useState(true);

    const getClientes = async () => {
        const url = 'https://apinic.herokuapp.com/vendedores'
        try {
            const response = await axios.get(url)
            setData(response.data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false);
        }
    }
    console.log(data)

    const getClientesPorId = async (id) => {
        try {
            const url = `https://apinic.herokuapp.com/vendedores/${id}`;
            const response = await axios.get(url);
            //setData(response.data)

        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    };


    useEffect(() => {
        getClientes();
    }, []);

    const saveCliente = async () => {

        try {
            const response = await axios.post(`https://apinic.herokuapp.com/vendedores`, {
                identificacion,
                nombre,
                correo,
                total
            });
            alert("Cliente agregado correctamente ...")
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <>
            <NavigationContainer>
                <NavigationBottomStack />
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: "grey",
        minWidth: 200,
        textAlignVertical: "center",
        paddingLeft: 10,
        borderRadius: 20,
    }
});
