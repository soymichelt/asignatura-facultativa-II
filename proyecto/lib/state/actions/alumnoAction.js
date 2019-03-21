import { AsyncStorage } from 'react-native'

const obtenerAgendaDeBaseDeDatos = async () => {
    try {
        let agenda = await AsyncStorage.getItem('AGENDA');
        if(agenda !== null) {
            const datosDeLaAgenda = JSON.parse(agenda);
            return datosDeLaAgenda;
        }
        else {
            return [];
        }
    }
    catch(error) {
        return [];
    }
}

const guardarAgenda = async (listadoAgenda) => {
    try {
        const agenda = await this.getAgendaDeBaseDeDatos();
        const datosAGuardar = JSON.stringify({ data: listadoAgenda });
        if(agenda !== null) {
            await AsyncStorage.setItem('AGENDA', datosAGuardar);
        }
        else {
            await AsyngStorage.mergeItem('AGENDA', datosAGuardar);
        }
    }
    catch(error) {
    }
}

/* Action Type's */
export const GUARDANDO_ALUMNO  =   'GUARDANDO_ALUMNO'
export const ALUMNO_AGREGADO = 'ALUMNO_AGREGADO'
export const EVENTO_NOMBRE_ALUMNO_AGREGAR = 'EVENTO_NOMBRE_ALUMNO_AGREGAR'
export const EVENTO_TELEFONO_ALUMNO_AGREGAR = 'EVENTO_TELEFONO_ALUMNO_AGREGAR'

/* Action Creators */
const guardandoAlumno  = (payload) => ({ type: GUARDANDO_ALUMNO, payload })
const alumnoAgregado  = (payload) => ({ type: ALUMNO_AGREGADO, payload })
const eventoNombreAlumnoAgregar = (payload) => ({ type: EVENTO_NOMBRE_ALUMNO_AGREGAR, payload })
const eventoTelefonoAlumnoAgregar = (payload) => ({ type: EVENTO_TELEFONO_ALUMNO_AGREGAR, payload })

/* Action's */
export const agregarAlumno = async (datosAlumno) => {
    return async (dispatch, getState) => {

        dispatch(guardandoAlumno({
            alumno: {
                estado: 'guardando',
            },
        }))

        const { alumno } = getState()

        let { listado } = alumno

        if(listado === null) {
            listado = await obtenerAgendaDeBaseDeDatos();
        }

        if(!listado) {
            listado = []
        }

        listado.push({
            key: (listado.length + 1).toString(),
            nombre: datosAlumno.nombre,
            telefono: datosAlumno.telefono,
        })

        //guardar datos en la base de datos
        await guardarAgenda(listado)

        dispatch(alumnoAgregado({
            alumno: {
                estado: 'guardado',
                listado: listado,
                nombre: '',
                telefono: '',
            },
        }))
    }
}

export const nombreAgregar = (nombre) => {
    return eventoNombreAlumnoAgregar({
        alumno: {
            nombre: nombre,
        },
    })
}

export const telefonoAgregar = (telefono) => {
    return eventoTelefonoAlumnoAgregar({
        alumno: {
            telefono: telefono,
        },
    })
}