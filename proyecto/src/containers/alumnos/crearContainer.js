import React, { Component } from 'react'
import Crear from '../../components/alumnos/crear'
import { connect } from 'react-redux'
import {
    agregarAlumno,
    nombreAgregar,
    telefonoAgregar,
} from './../../../lib/state/actions/alumnoAction'

class CrearContainer extends Component {

    eventoAgregarAlumno = () => {
        this.props.agregarAlumno({
            nombre: this.props.nombre,
            telefono: this.props.telefono,
        })
    }

    eventoNombre = (nombre) => {
        this.props.nombreAgregar(nombre)
    }

    eventoTelefono = (telefono) => {
        this.props.telefonoAgregar(telefono)
    }

    render() {

        const {
            estado,
            nombre,
            telefono,
        } = this.props

        return (
            <Crear
                estado={estado}
                nombre={nombre}
                telefono={telefono}
                eventoAgregarAlumno={this.eventoAgregarAlumno}
                eventoNombre={this.eventoNombre}
                eventoTelefono={this.eventoTelefono}
            />
        )

    }

}

const mapStateToProps = (newState, newProps) => {

    const { alumno } = newState

    if(alumno) {
        const { estado, nombre, telefono } = alumno
        return {
            estado: estado ? estado : '',
            nombre: nombre ? nombre : '',
            telefono: telefono ? telefono : '',
        }
    }

    return {
        estado: '',
        nombre: '',
        telefono: '',
    }

}

const mapDispatchToProps = (dispatch) => ({

    agregarAlumno: (alumno) => dispatch(agregarAlumno(alumno)),
    nombreAgregar: (nombre) => dispatch(nombreAgregar(nombre)),
    telefonoAgregar: (telefono) => dispatch(telefonoAgregar(telefono)),

})

export default connect(mapStateToProps, mapDispatchToProps)(CrearContainer)