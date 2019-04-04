import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Lista from './../containers/lista-container';
import Crear from './../containers/crear-container';
import Editar from './../containers/editar-container';

const stackNavigator = createStackNavigator({
    lista: {
        screen: Lista,
    },
    crear: {
        screen: Crear,
    },
    editar: {
        screen: Editar,
    },
}, {
    defaultNavigationOptions: {
        headerTitle: 'Mis Fotos',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#ffffff',
    },
});

export default createAppContainer(stackNavigator);