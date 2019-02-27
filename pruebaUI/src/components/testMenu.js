import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'

import TestStyle from './testStyle'
import TestPlatform from './testPlatform'
import Crud from './../containers/crudContainer'

const TestMenu = (props) => {

    return(
        <View style={styles.container}>
            <Text>Menú de la App</Text>
            <View style={styles.buttonView}>
                <Button
                    title='Estilos y Layout'
                    onPress={() => props.navigation.navigate('PantallaEstilosYLayout')}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    title='CRUD'
                    onPress={() => props.navigation.navigate('PantallaCrud')}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    title='Plataformas'
                    onPress={() => props.navigation.navigate('PantallaPlataformas')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        marginTop: 8,
        height: 32,
        width: 200,
    },
})

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: TestMenu,
    },
    PantallaEstilosYLayout: {
        screen: TestStyle,
    },
    PantallaPlataformas: {
        screen: TestPlatform,
    },
    PantallaCrud: {
        screen: Crud,
    },
}, {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerTitle: 'Mi App',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#ffffff',
    },
})

export default createAppContainer(MenuNavigator)