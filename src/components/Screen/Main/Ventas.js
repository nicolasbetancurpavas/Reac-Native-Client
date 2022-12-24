import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Logo from '../Shared/Logo'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

export default function Ventas() {
    const [id, setId] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    console.log(data)

    const getClientes = async () => {

        const url = 'http://localhost:3000/vendedores'

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

    const getClientesPorId = async (id) => {
        try {
            const url = `http://localhost:3000/vendedor/${id}`;
            const response = await axios.get(url);
            const array = response.data.datos
            setData(array)
        }
        catch (error) {
            console.log(error)
        }

        finally {
            setLoading(false)
        }
    };

    return (
        <View>
            <TextInput
                placeholder='Buscar por id'
                value={id}
                onChangeText={id => setId(id)}
            >

            </TextInput>

            <TouchableOpacity
                onPress={() => getClientesPorId(id)}
            >
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Buscar</Text>
            </TouchableOpacity>
        </View>

    )
}
