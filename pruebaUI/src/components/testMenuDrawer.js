import React from 'react'
import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation'

import TestStyle from './testStyle'
import TestPlatform from './testPlatform'
import Crud from './../containers/crudContainer'

import {
    Image,
} from 'react-native'

const TestMenuDrawer = createDrawerNavigator({
    PantallaEstilosYLayout: {
        screen: TestStyle,
        navigationOptions: {
            drawerLabel: 'Estilos y Layout',
            drawerIcon: <Image source={require('./../../assets/house.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    PantallaPlataformas: {
        screen: Crud,
        navigationOptions: {
            drawerLabel: 'Crud',
            drawerIcon: <Image source={require('./../../assets/student.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    PantallaCrud: {
        screen: TestPlatform,
        navigationOptions: {
            drawerLabel: 'Plataforma',
            drawerIcon: <Image source={require('./../../assets/smartphone.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
})

export default createAppContainer(TestMenuDrawer)