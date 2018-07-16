const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('actualizar', 'Actualizar el estado completado de una tarea', optsActualizar)
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('borrar', 'Borra un elemento de la lista', optsCrear)
    .help()
    .argv;


module.exports = {
    argv
}