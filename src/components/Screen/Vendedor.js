import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState, Component } from 'react'
import Logo from '../Logo/Logo'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'


const principalColor = '#167156'
const subColor = '#9E9E9E'

const styles = StyleSheet.create(
    {

        container: {
            marginTop: 0,
            maxWidth: 450,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        },

        inputs: {
            backgroundColor: `${principalColor}`,
            padding: 6,
            border: '2px solid grey',
            marginBottom: 15,
            color: `white`,
            borderRadius: 10,
        }
    })

export default function vendedor() {


    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [search, setSearch] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [total, setTotal] = useState('')
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

    const getClientesPorId = async (id) => {
        try {
            const url = `https://apinic.herokuapp.com/vendedor/${id}`;
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


    const saveCliente = async () => {

        try {
            const response = await axios.post(`https://apinic.herokuapp.com/vendedores`, {
                identificacion: identificacion,
                nombre: nombre,
                correo: correo,
                total: total,
            });

            alert("Cliente agregado correctamente ...")

        } catch (error) {
            console.log(error)
        }

        finally {
            setLoading(false);
        }
    };

    const { control, handleSubmit, reset, formState: { errors } } = useForm({

        defaultValues: {
            id: identificacion,
            name: nombre,
            correo: correo,
            total: total,
        }

    })

    const onSubmit = data => {

        console.log(data)
        setIdentificacion(data.id)
        setNombre(data.name)
        setCorreo(data.correo)
        setTotal(data.total)

        saveCliente()

    }

    return (
        <View style={styles.container}>
            <Logo
                colorBorder={`${subColor}`}
                textColor={`${principalColor}`}
                colorText2={`${subColor}`}
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[0-9]*(\.?)[ 0-9]+$/,
                    minLength: 3
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputs}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'Digitar identificacion'}
                    />
                )}
                name="id"
            />

            {errors.id?.type == 'required' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>se requiere este dato</Text>}
            {errors.id?.type == 'pattern' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>solo Numeros</Text>}
            {errors.id?.type == 'minLength' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>debe tener mas de 3 letras </Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[A-Z]+$/i,
                    minLength: 4
                }}

                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputs}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'digita nombre'}
                    />
                )}

                name="name"
            />

            {errors.name?.type == 'required' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>se requiere este dato</Text>}
            {errors.name?.type == 'pattern' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>solo letras</Text>}
            {errors.name?.type == 'minLength' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>debe tener mas de 4 letras</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputs}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'Digitar correo'}
                    />
                )}
                name="correo"
            />

            {errors.correo?.type == 'required' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>se requiere este dato</Text>}
            {errors.correo?.type == 'pattern' && <Text style={{ fontSize: 12, color: '#7F2D28', marginBottom: 15, }}>Digitar correo valido</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputs}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'Digitar totalcomiciones'}
                    />
                )}
                name="total"
            />
            {errors.total?.type == 'required' && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>requiere</Text>}



            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Guardar</Text>
            </TouchableOpacity>

            <Text>Resultado</Text>


            <TextInput
                placeholder='Buscar por id'
                style={styles.inputs}
                value={id}
                onChangeText={id => setId(id)}
            >

            </TextInput>

            <TouchableOpacity
                onPress={() => getClientesPorId(id)}
            >
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Buscar</Text>
            </TouchableOpacity>

            <Text>{data.idVendedor}</Text>
            <Text>{data.nombre}</Text>
            <Text>{data.correo}</Text>
            <Text>{data.totalComision}</Text>


        </View>
    )
}