require('colors');


const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('====================='.green)
        console.log('Seleccione una funcion'.green)
        console.log('=====================\n'.green)

        console.log(`${'1.'.green} CREAR TAREAS`);
        console.log(`${'2.'.green} LISTAR TAREAS`);
        console.log(`${'3.'.green} LISTAR TAREAS COMPLETAS`);
        console.log(`${'4.'.green} lISTAR TAREAS PENDIENTES`);
        console.log(`${'5.'.green} COMPLETAR TAREAS`);
        console.log(`${'6.'.green} BORRAR TAREAS`);
        console.log(`${'0.'.green} SALIR\n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione una opcion para continuar\n`, (opt) => {
            readLine.close();
            resolve(opt)
        })
    })
}

module.exports = {
    mostrarMenu
}