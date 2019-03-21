import React, { Component } from 'react';
import Lista from '../components/lista.js';

class Listacontainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datos: [],
        };
        
    }

    render() {
        const { datos } = this.state
        return (
            <Lista
                datos={datos}
            />
        )
    }

    componentDidMount() {
        //Ocupamos fetch como un método y consumimos una URL
        fetch('https://jsonplaceholder.typicode.com/photos')
        //Lo resolvemos como una propmesa y primero obtenemos
        //un objeto response y devolvemos otra promesa
        //con los datos en json
        .then(response => response.json())
        //Función de flecha con un parámetro.
        //Ahí vienen nuestros datos.
        .then((datos) => {

            //aquí escribimos el código donde
            //ocupamos nuestros datos
            this.setState({
                //Actualizamos el estado asignando los datos.
                //Al actualizar el estado se volverá a lanzar
                //el método render()
                datos: datos,
            })
        })
        .catch( (error) => {
            //si hay errores aquí podemos
            //controlarlos
        })
    }

}

export default Listacontainer;