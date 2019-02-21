import React from 'react'

import {
    TextInput,
    View,
    Text,
    Button,
} from 'react-native'

const Crear = (props) => {

    const {
        nombre, 
        eventoEditarNombre, 
        eventoEditar,
    } = props

    return (
        <View>
            <Text>
                Editar un alumno
            </Text>
            <TextInput
                onChangeText={ eventoEditarNombre }
                value={nombre}
            />
            <Button
                title='Editar'
                onPress={eventoEditar}
            />
        </View>
    )
}

export default Crear