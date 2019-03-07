import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'

import List from './../../containers/alumnos/listContainer'
import Crear from './../../containers/alumnos/crearContainer'

const MenuAlumnos = createStackNavigator({
    ListadoDeAlumnos: {
        screen: List,
    },
    CrearAlumno: {
        screen: Crear,
        navigationOptions: {
            headerTitle: 'Crear alumno',
        },
    },
}, {
    initialRouteName: 'ListadoDeAlumnos',
    defaultNavigationOptions: {
        headerTitle: 'Alumnos',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#ffffff',
    },
})

export default createAppContainer(MenuAlumnos)