import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

const TestStyle = (props) => {

    return (

        <View>
            <View>
                <Text style={styles.titulo}>
                    Mi App
                </Text>
            </View>
            <View>
                <Text style={styles.descripcion}>
                    Esta es la descripción de mi aplicación
                </Text>
            </View>
            <View>
                <Image
                    style={styles.imagenPerfil}
                    source={ require('./../../assets/logo.png') }
                />
            </View>

            <View style={styles.contenedorDeBotones}>
                <View style={styles.boton}>
                    <Button title='Perfil' />
                </View>
                <View style={styles.boton}>
                    <Button title='Chat' />
                </View>
                <View style={styles.boton}>
                    <Button title='Fotos' />
                </View>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    titulo: {
        marginBottom: 8,
        color: 'red',
        fontSize: 18,
    },
    descripcion: {
        marginBottom: 8,
        color: 'yellow',
        fontSize: 12,
    },
    contenedorDeBotones: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    boton: {
        flex: 1,
    },
});

export default TestStyle