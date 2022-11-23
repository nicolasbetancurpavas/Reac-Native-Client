import { Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo({ colorBorder, textColor, }) {


    const styles = StyleSheet.create(
        {
            imgHome: {
                marginTop: 20,
                width: 150,
                height: 150,
                borderRadius: '10%',
                border: `5px solid  ${colorBorder}`,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 30

            },

        }
    )

    return (
        <SafeAreaView>
            <Image
                style={styles.imgHome}
                source={require('../img/aguate.png')}
            />
        </SafeAreaView>
    )
}
