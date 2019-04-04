import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    Button,
} from 'react-native'
import { TouchableOpacity } from 'react-native';

const Lista = (props) => {
    const { datos, miEventoPressPantallaCrear, miEventoPressPantallaEditar } = props;
    return (
        <View>
            <View>
                <Button
                    title={'Crear Foto'}
                    onPress={miEventoPressPantallaCrear}
                />
            </View>
            <FlatList
                style={{
                    width: '100%',
                    height: '100%',
                }}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity
                                key={item.key}
                                onPress={
                                    () => {
                                        miEventoPressPantallaEditar(item)
                                    }
                                }
                                style={{
                                    margin: 12,
                                    backgroundColor: '#fff',
                                    borderRadius: 6,
                                    padding: 12,
                                }}
                            >
                                <View>
                                    <Text>{item.title}</Text>
                                    <Image
                                        source={{uri: item.url}}
                                        style={
                                            { width: '100%', height: 350, resizeMode: 'cover', }
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
                data={datos}
            />
        </View>
    )
}

export default Lista