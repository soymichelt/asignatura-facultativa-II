import React from 'react'
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native'

const Crear = (props) => {

    const {
        estado,
        nombre,
        telefono,
        eventoAgregarAlumno,
        eventoNombre,
        eventoTelefono,
    } = props

    return(
        <View>

            <View style={styles.controles}>
                <TextInput
                    style={ styles.cuadroDeBusqueda }
                    placeholder={'Nombres y apellidos...'}
                    onChangeText={eventoNombre}
                    value={nombre}
                />
            </View>

            <View style={styles.controles}>
                <TextInput
                    style={styles.cuadroDeBusqueda}
                    placeholder={'Teléfono...'}
                    onChangeText={eventoTelefono}
                    value={telefono}
                    keyboardType={'phone-pad'}
                />
            </View>

            <View
                style={styles.controles}
            >
                <Button
                    title={'Guardar'}
                    color={'#263238'}
                    disabled={estado === 'guardando' ? true : false}
                    onPress={eventoAgregarAlumno}
                />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    controles: {
        margin: 12,
    },
    cuadroDeBusqueda: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        height: 40,
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
})

export default Crear