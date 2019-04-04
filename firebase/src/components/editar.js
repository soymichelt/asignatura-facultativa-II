import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

const Editar = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        url,
        miEventoCambiarURL,
        miEventoPressEditar,
        estadoEnEditado,
    } = props
    return (
        <View>
            <View>
                <Text>Título</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Text>URL de Imagen</Text>
                <TextInput
                    value={url}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Button
                    title={'Guardar'}
                    onPress={miEventoPressEditar}
                    disabled={ estadoEnEditado === 'cargando' ? true : false }
                />
            </View>
        </View>
    )
};

export default Editar;