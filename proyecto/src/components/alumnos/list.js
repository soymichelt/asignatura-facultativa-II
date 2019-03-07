import React from 'react'
import {
    View,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native'

const List = (props) => {

    const {
        data,
        eventoAgregar,
        eventoBuscar,
        nombreBuscar,
    } = props

    return (
        <ScrollView>
            <View style={listStyles.operaciones}>
                <TextInput
                    style={listStyles.cuadroDeBusqueda}
                    placeholder={'Buscar...'}
                    onChangeText={eventoBuscar}
                    value={nombreBuscar}
                />
                <TouchableOpacity
                    onPress={eventoAgregar}
                >
                    <Image
                        source={require('./../../../assets/employee.png')}
                        style={listStyles.agregarAlumnoImagen}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                renderItem={({ item }) => <Item
                    item={item}
                />}
                ItemSeparatorComponent={({highlighted}) => (
                    <Separator />
                )}
                data={data}
            />
        </ScrollView>
    )

}

const listStyles = StyleSheet.create({
    operaciones: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    cuadroDeBusqueda: {
        margin: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        height: 40,
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 50,
        flex: 1,
        backgroundColor: '#fff',
    },
    agregarAlumnoImagen: {
        height: 40,
        width: 40,
        marginRight: 12,
        resizeMode: 'cover',
    },
})

const Item = (props) => {

    const { item } = props

    return (
        <TouchableOpacity>
            <View style={itemStyles.container}>
                <View>
                    <Image
                        style={itemStyles.studentImage}
                        source={require('./../../../assets/student.png')}
                    />
                </View>
                <View style={itemStyles.info}>
                    <View>
                        <Text style={itemStyles.nombre}>{item.nombre}</Text>
                    </View>
                    <View>
                        <Text style={itemStyles.telefono}>{item.telefono}</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={itemStyles.phoneImage}
                        source={require('./../../../assets/arrow-to-right.png')}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )

}

const itemStyles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    studentImage: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
    },
    info: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
    },
    nombre: {
        fontSize: 16,
        color: '#263238',
        fontWeight: 'bold',
    },
    telefono: {
        fontSize: 12,
    },
    phoneImage: {
        resizeMode: 'cover',
        height: 16,
        width: 16,
    },
})

const Separator = (props) => {

    return (
        <View style={separatorStyles.separator} />
    )

}

const separatorStyles = StyleSheet.create({
    separator: {
        height: 1,
        flex: 1,
        backgroundColor: '#eceff1',
        marginLeft: 74,
        marginRight: 12,
    },
})

export default List