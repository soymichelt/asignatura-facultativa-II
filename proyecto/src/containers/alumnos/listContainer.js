import React, { Component } from 'react'
import List from './../../components/alumnos/list'
import { connect } from 'react-redux'

class ListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filtrarPor: '',
        }
    }

    eventoAgregar = () => {
        this.props.navigation.navigate('CrearAlumno')
    }

    eventoBuscar = (nombreABuscar) => {
        this.setState({
            filtrarPor: nombreABuscar,
        })
    }

    filtrar = (nombreAlumno, alumnos) => {
        return alumnos.filter((item) => {
            return item.nombre.toLowerCase().indexOf(nombreAlumno.toLowerCase()) > -1;
        })
    }

    render() {

        let { alumnos } = this.props

        const { filtrarPor } = this.state

        console.log(alumnos)

        let listadoFiltrado = []

        if(alumnos) {
            if(alumnos.length > -1) {
                listadoFiltrado = this.filtrar(filtrarPor, alumnos)
            }
        }

        return (
            <List
                data={listadoFiltrado}
                eventoAgregar={this.eventoAgregar}
                eventoBuscar={this.eventoBuscar}
                nombreBuscar={filtrarPor}
            />
        )

    }

}

const mapStateToProps = (newState, newProps) => {
    
    const { alumno } = newState

    let alumnos = []

    if(alumno) {
        const { listado } = alumno
        if(listado) {
            alumnos = listado
        }
    }

    return {
        alumnos: alumnos,
    };
}

export default connect(mapStateToProps)(ListContainer)