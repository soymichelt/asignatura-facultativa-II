import React from 'react'

import {
    TextInput,
    View,
    Text,
    Button,
} from 'react-native'

const Crear = (props) => {

    const {nombre, eventoNombre, eventoCrear} = props

    return (
        <View>
            <Text>
                Añadir un alumno
            </Text>
            <TextInput
                onChangeText={eventoNombre}
                value={nombre}
            />
            <Button
                title='Añadir'
                onPress={eventoCrear}
            />
        </View>
    )
}

export default Crear