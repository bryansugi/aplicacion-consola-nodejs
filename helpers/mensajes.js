const colors = require('colors')


const mostrarMenu = () => {


    const promesa = new Promise(resolve => {

        console.clear()
        console.log('========================'.green)
        console.log(' Seleccione una opcion'.green)
        console.log('=========================\n'.green)

        console.log(`${'1.'.green} Crear Tarea`)
        console.log(`${'2.'.green} Listar Tarea`)
        console.log(`${'3.'.green} Listar Tareas Completadas`)
        console.log(`${'4.'.green} Listar Tareas Pendientes`)
        console.log(`${'5.'.green} Completar Tarea(s)`)
        console.log(`${'6.'.green} Borrar Tarea`)
        console.log(`${'0.'.green} Salir\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        })

    })

    return promesa



}

const pausa = () => {

    const promesaPausa = new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })

    })

    return promesaPausa


}

module.exports = {
    mostrarMenu,
    pausa
}