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
            nombreAlumno: '',
            editarId: 0,
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
            nombreAlumno: textNombre,
        })
    }

    eventoCrear = () => {
        const { nombreAlumno, alumnos } = this.state
        alumnos.push({
            key: alumnos.length + 1,
            nombreAlumno,
        })
        this.setState({
            nombreAlumno: '',
            alumnos: alumnos,
            pantalla: 'lista',
        })
    }

    /* eventos para pantalla editar */
    eventoEditarNombre = (textNombre) => {
        this.setState({
            nombreAlumno: textNombre,
        })
    }

    eventoEditar = () => {
        const { nombreAlumno, editarId, alumnos } = this.state
        for(let i = 0; i < alumnos.length; i++) {
            if(editarId === alumnos[i].key) {
                alumnos[i].nombreAlumno = nombreAlumno;
            }
        }
        this.setState({
            nombreAlumno: '',
            alumnos: alumnos,
            pantalla: 'lista',
        })
    }

    render() {

        const { pantalla, alumnos, nombreAlumno, } = this.state

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
                        nombre={nombreAlumno}
                        eventoNombre={this.eventoNombre}
                        eventoCrear={this.eventoCrear}
                    />
                )
            case 'editar':
                return (
                    <Editar
                        nombre={nombreAlumno}
                        eventoEditarNombre={this.eventoPantallaEditar}
                        eventoEditar={this.eventoEditar}
                    />
                )
            case 'eliminar':
        }

    }

 }

 export default CrudContainer