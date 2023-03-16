const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tareas`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            }
            ,
            {
                value: '6',
                name: `${'6.'.green} borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }

        ]

    },
]

const inquirerMenu = async () => {

    // console.clear();
    console.log('====================='.green)
    console.log('Seleccione una funcion'.white)
    console.log('=====================\n'.green)

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
}

const pausa = async () => {

    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }];

    console.log('\n')
    await inquirer.prompt(question);

}

const leerInput = async (message) => {

    const question = [

        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {

                if (value.length === 0) {
                    return 'Porfavor ingrese un valor';
                }
                return true;
            }
        }

    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const listadoTareaBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }

    });


    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }

    ]

    const { id } = await inquirer.prompt(preguntas)
    return id;
}


const confirmar = async (message) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}



const mostrarListadoCheckList = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }

    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(preguntas)
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareaBorrar,
    confirmar,
    mostrarListadoCheckList
}