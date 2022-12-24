import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState, Component } from 'react'
import Logo from '../Shared/Logo'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

const principalColor = '#6A10C3'
const subColor = '#2884E0'

export default function Register({ navigation }) {

    const [data, setData] = useState([])
    const [contra, setContra] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [result, setResult] = useState('');


    const saveCliente = async () => {

        try {
            const response = await axios.post(`http://localhost:3000/vendedores`, {
                "identificacion": "identificacion",
                "nombre": "nombre",
                "correo": "correo",
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
            contra: contra,
        }

    })

    const onSubmit = data => {

        console.log(data)
        setIdentificacion(data.id)
        setNombre(data.name)
        setCorreo(data.correo)

        saveCliente()

    }

    return (
        <View style={styles.container}>
            <Logo
                primaryText={'Seller'}
                secondaryText={'Register'}
            />

            <View>
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

                {errors.id?.type == 'required' && <Text style={styles.textError}>se requiere este dato</Text>}
                {errors.id?.type == 'pattern' && <Text style={styles.textError}>solo Numeros</Text>}
                {errors.id?.type == 'minLength' && <Text style={styles.textError}>debe tener mas de 3 letras </Text>}

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
                            placeholder={'Digita nombre'}
                        />
                    )}

                    name="name"
                />

                {errors.name?.type == 'required' && <Text style={styles.textError}>se requiere este dato</Text>}
                {errors.name?.type == 'pattern' && <Text style={styles.textError}>solo letras</Text>}
                {errors.name?.type == 'minLength' && <Text style={styles.textError}>debe tener mas de 4 letras</Text>}

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

                {errors.correo?.type == 'required' && <Text style={styles.textError} > se requiere este dato</Text>}
                {errors.correo?.type == 'pattern' && <Text style={styles.textError}> Digitar correo valido</Text>}


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
                            placeholder={'Digitar contraseña'}
                        />
                    )}
                    name="contra"
                />

            </View>

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.btn}>Registrar</Text>
            </TouchableOpacity>

            <Text>{result}</Text>

            <Text
                style={styles.textLogin}
                onPress={() => navigation.navigate('Login')}
            > ───── Iniciar sesion  ───── </Text>

            <View style={styles.containerImg}>
                <Image
                    style={styles.imgHome}
                    source={require('../../../assets/img/insta.png')}
                />
                <Image
                    style={styles.imgHome}
                    source={require('../../../assets/img/google.png')}
                />
                <Image
                    style={styles.imgHome}
                    source={require('../../../assets/img/facebook.png')}
                />
            </View>

        </View >
    )
}


const styles = StyleSheet.create(

    {

        container: {
            marginTop: 0,
            maxWidth: 450,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'red',
            margin: 'auto',
            padding: 0,
            backgroundColor: 'white',
        },

        inputs: {
            width: 250,
            textAlign: 'center',
            backgroundColor: `white`,
            padding: 15,
            marginBottom: 16,
            color: `#A4A4A4`,
            shadowColor: "#666666",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
            borderRadius: 8,
            fontFamily: 'monospace'
        },

        btn: {
            width: 290,
            backgroundColor: `${subColor}`,
            color: '#E3E3E3',
            padding: 10,
            textAlign: 'center',
            marginTop: 30,
            borderRadius: 8,
            shadowColor: "#666666",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
            borderRadius: 8,
            fontFamily: 'monospace'
        },

        containerImg: {
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 80,
        },

        imgHome: {
            width: 35,
            height: 35,
            marginRight: 15
        },

        textLogin: {
            marginTop: 15,
            color: `${subColor}`,
            fontFamily: 'monospace',

        },

        textError: {
            fontSize: 13,
            color: 'red',
            textAlign: 'center',
            marginBottom: 5,
            fontFamily: 'monospace',
        }

    })