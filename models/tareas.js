const Tarea = require('./tarea')

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        });
        return listado
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea


    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })

    }

    listadoCompleto() {

        let mensaje = '';
        this.listadoArr.forEach((obj, i) => {

            const { desc, completadoEn } = obj
            let estado = `${'Pendiente'.red}`
            let id = `${i+1}`.green

            if (completadoEn !== null) {
                estado = `${'Completada'.green}`
            }

            mensaje += `${id}. ${desc} :: ${estado}\n`

            i++
        })

        console.log(mensaje);

    }

    listarPendientesCompletadas(completada = true) {

        let mensaje = '';
        let contador = 0;
        this.listadoArr.forEach((obj) => {

            const { desc, completadoEn } = obj
            let estado = `${'Pendiente'.red}`

            if (completada) {

                if (completadoEn) {
                    contador += 1
                    estado = `${'Completada'.green}`
                    mensaje += `${contador.toString().green}. ${desc} :: ${completadoEn.green}\n`
                }

            } else {

                if (!completadoEn) {
                    contador += 1
                    estado = `${'Pendiente'.red}`
                    mensaje += `${contador.toString().green}. ${desc} :: ${estado}\n`
                }
            }

        })

        console.log(mensaje);


    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {

            const tarea = this._listado[id]
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null
            }

        });
    }

}

module.exports = Tareas