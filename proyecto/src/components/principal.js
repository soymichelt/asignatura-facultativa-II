import React from 'react'
import MenuAlumnos from './../components/alumnos/menuAlumnos'
import { Provider } from 'react-redux'
import { store } from './../../lib/state/store'

const Principal = (props) => {

    return (
        <Provider store={store}>
            <MenuAlumnos />
        </Provider>
    )

}

export default Principal