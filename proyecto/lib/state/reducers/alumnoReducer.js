/*
    Reducer de Alumnos
*/
import {
    GUARDANDO_ALUMNO,
    ALUMNO_AGREGADO,
    EVENTO_NOMBRE_ALUMNO_AGREGAR,
    EVENTO_TELEFONO_ALUMNO_AGREGAR,
} from './../actions/alumnoAction'

export const alumnoReducer = (state = {}, action) => {

    switch(action.type) {

        case GUARDANDO_ALUMNO:
        case ALUMNO_AGREGADO:
        case EVENTO_NOMBRE_ALUMNO_AGREGAR:
        case EVENTO_TELEFONO_ALUMNO_AGREGAR: {
            const { alumno } = action.payload;
            const newState = { ...state, ...alumno }
            return newState;
        }
        default: {
            return state;
        }

    }

};