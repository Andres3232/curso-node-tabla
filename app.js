
const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar')

require('colors');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log (nombreArchivo.red, 'creado'.green))
    .catch (err => console.log(err))


