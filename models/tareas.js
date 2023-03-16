const Tarea = require("./tarea");

class Tareas {

    _listado = {
        'abc': 123
    };

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)

        });
        return listado;
    }


    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }


    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    ListadoCompleto() {

        this.listadoArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    ListarPendienteCompletadas(completadas = true) {

        this.listadoArr.forEach((tarea) => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'completada'.green : 'no esta completada'.red;
            let contador = 0;
            if (completadas) {

                if (completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().green} ${desc} :: ${estado}`);
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().red} ${desc} :: ${estado}`);
                }
            }
        })
    }


    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


    toggleCompletadas(ids = []) {

        ids.forEach(id => {

            const tarea = this._listado[id];

            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;