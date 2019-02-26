import React from 'react'
import {
    ScrollView,
    Text,
    FlatList,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const List = (props) => {

    const { data, eventoPantallaAgregar, eventoPantallaEditar, eventoPantallaEliminar } = props
    
    return (

        <ScrollView>
            <Text>Listado de Alumnos</Text>
            <Button
                title='Agregar'
                onPress={eventoPantallaAgregar}
            />
            <FlatList
                data={data}
                renderItem={
                    ({item}) => <Elemento item={item}
                        eventoPantallaEditar={eventoPantallaEditar}
                        eventoPantallaEliminar={eventoPantallaEliminar}
                    />
                }
            />
        </ScrollView>

    )

}

const Elemento = (props) => {

    const {
        item,
        eventoPantallaEditar,
        eventoPantallaEliminar,
    } = props

    return (
        <TouchableOpacity
            onPress={ () => eventoPantallaEditar(item.key) }
            onLongPress= {() => eventoPantallaEliminar(item.key) }
        >
            <Text style={styles.elemento}>
                {item.nombreAlumno}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    titulo: {
        color: 'green',
        fontSize: 18,
    },
    elemento: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        color: 'black',
        height: 50,
        backgroundColor: 'red',
        margin: 8,
    },
})

export default List