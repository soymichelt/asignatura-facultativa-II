import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
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
                    width={50}
                    height={80}
                />
            </View>

            <View style={styles.contenedorDeBotones}>
                <View style={styles.boton}>
                    <Button title='Perfil' color={"red"} />
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
        color: 'black',
        fontSize: 14,
    },
    contenedorDeBotones: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton: {
        width: 100,
        height: 30,
        margin: 8,
    },
});

export default TestStyle