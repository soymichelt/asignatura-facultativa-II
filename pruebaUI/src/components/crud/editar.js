import React from 'react'

import {
    TextInput,
    View,
    Text,
    Button,
    StyleSheet,
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
            <View style={styles.buttonContainer}>
                <Button
                    title='Editar'
                    onPress={eventoEditar}
                />
                <Button
                    title='Eliminar'
                    color='red'
                    onPress={eventoEditar}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    },
});

export default Crear