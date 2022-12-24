import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function Logo({ primaryText, secondaryText, }) {


    const styles = StyleSheet.create(
        {
            imgHome: {
                marginTop: 0,
                width: 300,
                height: 300,
                marginLeft: 'auto',
                marginRight: 'auto',
            },

            containerText: {
                flexDirection: 'row',
                justifyContent: 'center',

            },

            primaryText: {
                color: '#6A10C3',
                fontSize: 26,
                fontWeight: 'bold',
                marginRight: 10,
                fontFamily: 'monospace'

            },

            secondaryText: {
                color: '#2884E0',
                fontSize: 26,
                fontWeight: 'bold',
                fontFamily: 'monospace'

            }

        }
    )

    return (
        <SafeAreaView style={{ marginBottom: 20, }}>
            <Image
                style={styles.imgHome}
                source={require('../../../assets/img/logo.png')}
            />
            <View
                style={styles.containerText}
            >
                <Text
                    style={styles.primaryText}
                >{primaryText}</Text>

                <Text
                    style={styles.secondaryText}
                >{secondaryText}</Text>

            </View>
        </SafeAreaView>
    )
}
