import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'

import TestStyle from './testStyle'
import TestPlatform from './testPlatform'
import Crud from './../containers/crudContainer'

import {
    Image,
} from 'react-native'

const TabNavigator = createBottomTabNavigator({
    Test1: {
        screen: TestStyle,
        navigationOptions: {
            tabBarLabel: 'Estilos y Layout',
            tabBarIcon: <Image source={require('./../../assets/house.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />
        },
    },
    Test2: {
        screen: Crud,
        navigationOptions: {
            tabBarLabel: 'Crud',
            tabBarIcon: <Image source={require('./../../assets/student.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />
        },
    },
    Test3: {
        screen: TestPlatform,
        navigationOptions: {
            tabBarLabel: 'Plataforma',
            tabBarIcon: <Image source={require('./../../assets/smartphone.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />
        },
    },
})

export default createAppContainer(TabNavigator)