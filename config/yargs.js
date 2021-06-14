const argv = require ('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe:'muestra la tabla en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: false,
                        describe:'hasta que numero quieres multiplicar'
                    })
                    .check ((argv, option) =>{
                        if (isNaN (argv.base) ){
                            throw 'la base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;