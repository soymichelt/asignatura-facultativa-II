import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

const Crear = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        url,
        miEventoCambiarURL,
        miEventoPressGuardar,
        estadoEnGuardado,
    } = props
    return (
        <View>
            <View>
                <Text>Título</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Text>URL de Imagen</Text>
                <TextInput
                    value={url}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Button
                    title={'Guardar'}
                    onPress={miEventoPressGuardar}
                    disabled={ estadoEnGuardado === 'cargando' ? true : false }
                />
            </View>
        </View>
    )
};

export default Crear;