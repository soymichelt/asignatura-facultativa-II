import React, { Component } from 'react';
import Crear from './../components/crear';
import firebase from 'react-native-firebase'

class CrearContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //estado de nuestros datos
            title: '',
            url: '',

            //estado de nuestra interfaz
            estadoEnGuardado: 'comienzo',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnGuardado: 'comienzo',
        });
    }

    miEventoCambiarURL = (url) => {
        this.setState({
            url: url,
            estadoEnGuardado: 'comienzo',
        })
    }

    miEventoPressGuardar = () => {

        this.setState({
            estadoEnGuardado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            title,
            url,
        } = this.state;

        db
        .collection('photos')
        .add({
            title: title,
            url: url,
        })
        .then(() => {
            this.setState({
                title: '',
                url: '',
                estadoEnGuardado: 'guardado',
            })
        })
        .catch((error) => {
            this.setState({
                estadoEnGuardado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            url,
            estadoEnGuardado,
        } = this.state

        return(
            <Crear
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                url={url}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressGuardar={this.miEventoPressGuardar}
                estadoEnGuardado={estadoEnGuardado}
            />
        )

    }

}

export default CrearContainer;