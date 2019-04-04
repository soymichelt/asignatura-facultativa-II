import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Lista from '../components/lista.js';

class Listacontainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datos: [],
        };
        
    }

    miEventoPressPantallaCrear = () => {
        this.props.navigation.navigate('crear');
    }

    miEventoPressPantallaEditar = (photo) => {

        this.props.navigation.navigate('editar', {
            photoParaActualizar: photo,
        });
    }

    render() {
        const { datos } = this.state
        return (
            <Lista
                datos={datos}
                miEventoPressPantallaCrear={ this.miEventoPressPantallaCrear }
                miEventoPressPantallaEditar={ this.miEventoPressPantallaEditar }
            />
        )
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('photos').onSnapshot((instantanea) => {
            const { datos } = this.state;
            instantanea.docChanges.forEach((cambio) => {
                const indice = datos.findIndex(item => item.key === cambio.doc.id);
                switch (cambio.type) {
                    case 'added': {
                        datos.push({
                            key: cambio.doc.id,
                            title: cambio.doc.data().title,
                            url: cambio.doc.data().url,
                        });
                        break;
                    }
                    case 'modified': {
                        if(indice !== -1) {
                            datos[indice].title = cambio.doc.data().title;
                            datos[indice].url = cambio.doc.data().url;
                        }
                        break;
                    }
                    case 'removed': {
                        if(indice !== -1 ) {
                            datos.splice(indice, 1);
                        }
                        break;
                    }
                }
            });
            this.setState({
                datos: datos,
            });
        });
    }

}

export default Listacontainer;