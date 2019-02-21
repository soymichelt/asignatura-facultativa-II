import React from 'react'
import {
    View,
    Text,
    Platform,
    StyleSheet,
} from 'react-native'

const TestPlatform = (props) => {

    if(Platform.OS === 'ios') {
        return (
            <ComponenteParaIOS
                version={Platform.Version}
            />
        )
    }
    else {
        return (
            <ComponenteParaAndroid />
        )
    }

}

const ComponenteParaAndroid = (props) => {

    const { version } = props

    return (
        <View>
            <Text style={stylesAndroid.mensaje}>
                Hola estoy en Android, en la versión {version}
            </Text>
            {/* Aquí podemos poner componentes que solo corran en Android */}

        </View>
    )

}

const stylesAndroid = StyleSheet.create({
    mensaje: {
        color: 'green',
    }
})

const ComponenteParaIOS = (props) => {

    const { version } = props

    return (
        <View>
            <Text style={stylesIOS.mensaje}>
                Hola estoy en iOS, en la versión {version}
            </Text>
            {/* Aquí podemos poner componentes que solo corran en iOS */}
        </View>
    )

}

const stylesIOS = StyleSheet.create({
    mensaje: {
        color: 'gray',
    },
})

export default TestPlatform