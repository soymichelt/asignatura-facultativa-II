import React, { Component } from 'react';
import Editar from './../components/editar';
import firebase from 'react-native-firebase'

class EditarContainer extends Component {

    constructor(props) {
        super(props);

        const photoParaActualizar = props.navigation.getParam('photoParaActualizar', {});

        console.log('photoParaActualizar', photoParaActualizar);

        this.state = {
            //estado de nuestros datos
            key: photoParaActualizar.key,
            title: photoParaActualizar.title,
            url: photoParaActualizar.url,

            //estado de nuestra interfaz
            estadoEnEditado: 'comienzo',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnEditado: 'comienzo',
        });
    }

    miEventoCambiarURL = (url) => {
        this.setState({
            url: url,
            estadoEnEditado: 'comienzo',
        })
    }

    miEventoPressEditar = () => {

        this.setState({
            estadoEnEditado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            key: photoId,
            title,
            url,
        } = this.state;

        db
        .collection('photos')
        .doc(photoId)
        .update({
            title: title,
            url: url,
        })
        .then(() => {
            this.setState({
                title: '',
                url: '',
                estadoEnEditado: 'guardado',
            })
        })
        .catch((error) => {
            this.setState({
                estadoEnEditado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            url,
            estadoEnEditado,
        } = this.state

        console.log('title', title)

        return(
            <Editar
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                url={url}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressEditar={this.miEventoPressEditar}
                estadoEnEditado={estadoEnEditado}
            />
        )

    }

}

export default EditarContainer;