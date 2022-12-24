import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState, Component } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Ionicons } from "@expo/vector-icons"
import Logo from '../Shared/Logo'
import axios from 'axios'


const principalColor = '#6A10C3'
const subColor = '#2884E0'

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
            marginBottom: 10,
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

        btnRegister: {
            width: 290,
            backgroundColor: `${principalColor}`,
            color: '#E3E3E3',
            padding: 10,
            textAlign: 'center',
            marginTop: 0,
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
            flexDirection: 'colum',
            marginTop: 30,
            marginBottom: 80,
        },

        textPassword: {
            position: 'absolute',
            right: -15,
            bottom: -10,
            color: '#A4A4A4',
        },

        imgHome: {
            width: 180,
            height: 45,
            marginBottom: 10,
            borderRadius: 10,
        },

        textLogin: {
            marginTop: 15,
            textAlign: 'center',
            color: '#A4A4A4',
            fontFamily: 'monospace',
            marginBottom: 10,
        },

        textError: {
            fontSize: 13,
            color: 'red',
            textAlign: 'center',
            marginBottom: 5,
            fontFamily: 'monospace',
        },

        touchable: {
            margin: 0
        },

        icons: {
            color: '#7A7A7A',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 5
        }
    })

export default function Login({ navigation }) {

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
            navigation.navigate('Ventas')

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
                secondaryText={'Login'}
            />

            <View>
                <Ionicons name='mail' style={styles.icons}> </Ionicons>
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

                <Ionicons name='lock-closed-sharp' style={styles.icons}> </Ionicons>
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

                {errors.contra?.type == 'required' && <Text style={styles.textError} > se requiere este dato</Text>}

                <Text style={styles.textPassword}>
                    olvidaste tu contraseña ?
                </Text>

            </View>

            <Text>{result}</Text>

            <View>

                <TouchableOpacity
                    style={styles.touchable}

                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.btn}>Iniciar sesion</Text>
                </TouchableOpacity>

                <Text
                    style={styles.textLogin}

                > ───── No tienes cuenta? ───── </Text>

                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.btnRegister}>Registrar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerImg}>
                <Image
                    style={styles.imgHome}
                    source={require('../../../assets/img/appstore.png')}
                />
                <Image
                    style={styles.imgHome}
                    source={require('../../../assets/img/googleApp.png')}
                />
            </View>

        </View >
    )
}