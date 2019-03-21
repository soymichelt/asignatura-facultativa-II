import React from 'react'
import { View, Text, FlatList, Image, } from 'react-native'

const Lista = (props) => {
    const { datos } = props;
    return (
        <View>
            <FlatList
                renderItem={
                    ({item}) => {
                        return (
                            <View>
                                <Text>{item.title}</Text>
                                <Image
                                    source={{uri: item.url}}
                                    style={
                                        { width: 200, height: 200, resizeMode: 'cover', }
                                    }
                                />
                            </View>
                        )
                    }
                }
                data={datos}
            />
        </View>
    )
}

export default Lista

