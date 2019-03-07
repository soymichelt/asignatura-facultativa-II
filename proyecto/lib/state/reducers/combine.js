/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'

import { alumnoReducer } from './alumnoReducer'

const rootReducer = combineReducers({
    alumno: alumnoReducer,
});

export default rootReducer;