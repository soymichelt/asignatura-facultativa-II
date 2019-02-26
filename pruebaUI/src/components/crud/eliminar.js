import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Eliminar = (props) => {
    const {nombre, eventoEliminar}= props;


    return(
        <View>
            <Text>
                nombre: {nombre}
            </Text>
            <Button title = 'Eliminar' onPress =  {eventoEliminar} >
            </Button>
        </View>
    )
}
export default Eliminar;