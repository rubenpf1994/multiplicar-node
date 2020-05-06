//requires
const argv = require('./config/yargs').argv;
const colors = require('colors');
//Destructuramos el modulo 'multiplicar.js' 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Lee el primer comando de entrada 
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');
}

console.log('Limite: ', argv.limite);