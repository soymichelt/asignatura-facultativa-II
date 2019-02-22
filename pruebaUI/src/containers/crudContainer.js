 import React, { Component } from 'react'

 import Lista from './../components/crud/list'
 import Crear from './../components/crud/crear'
 import Editar from './../components/crud/editar'

 class CrudContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pantalla: 'lista',
            alumnos: [],
            nombreAlumnoCrear: '',
            nombreAlumnoEditar: '',
            editarId: '',
        };

    }

    eventoPantallaAgregar = () => {
        this.setState({
            pantalla: 'crear',
        });
    }

    eventoPantallaEditar = (alumnoId) => {
        this.setState({
            pantalla: 'editar',
            editarId: alumnoId,
        })
    }

    /* eventps para pantalla crear */
    eventoNombre = (textNombre) => {
        this.setState({
            nombreAlumnoCrear: textNombre,
        })
    }

    eventoCrear = () => {
        const { nombreAlumnoCrear, alumnos } = this.state
        alumnos.push({
            key: (alumnos.length + 1).toString(),
            nombreAlumno: nombreAlumnoCrear,
        })
        this.setState({
            nombreAlumnoCrear: '',
            alumnos: alumnos,
            pantalla: 'lista',
        })
    }

    /* eventos para pantalla editar */
    eventoEditarNombre = (textNombre) => {
        this.setState({
            nombreAlumnoEditar: textNombre,
        })
    }

    eventoEditar = () => {
        const { nombreAlumnoEditar, editarId, alumnos } = this.state
        for(let i = 0; i < alumnos.length; i++) {
            if(editarId === alumnos[i].key) {
                alumnos[i].nombreAlumno = nombreAlumnoEditar;
            }
        }
        this.setState({
            nombreAlumnoEditar: '',
            alumnos: alumnos,
            pantalla: 'lista',
        })
    }

    render() {

        const { pantalla, alumnos, nombreAlumnoCrear, nombreAlumnoEditar, } = this.state

        switch (pantalla) {

            case 'lista':
                return (
                    <Lista
                        data={alumnos}
                        eventoPantallaAgregar={this.eventoPantallaAgregar}
                        eventoPantallaEditar={this.eventoPantallaEditar}
                    />
                )
            case 'crear':
                return (
                    <Crear
                        nombre={nombreAlumnoCrear}
                        eventoNombre={this.eventoNombre}
                        eventoCrear={this.eventoCrear}
                    />
                )
            case 'editar':
                return (
                    <Editar
                        nombre={nombreAlumnoEditar}
                        eventoEditarNombre={this.eventoPantallaEditar}
                        eventoEditar={this.eventoEditar}
                    />
                )
            case 'eliminar':
        }

    }

 }

 export default CrudContainer