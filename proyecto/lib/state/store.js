/*
    Almacen de estado
*/
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

/*
    Reducers
*/
import reducer from './reducers/combine'

/*
    Estado inicial
*/
const initialState = {
    alumno: {
        listado: null,
        estado: '',
        nombre: '',
        telefono: '',
    },
};

/*
    Exportar y crear Store
*/
export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);