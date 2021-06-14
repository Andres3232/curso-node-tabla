const colors = require('colors');

const fs = require ('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{

    try {


        let salida,consola = '';

  
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;  
            consola += `${base} ${ 'x'.green} ${i} = ${base * i} \n`.blue;   

        }
        if (listar){
            console.log (`=====Tabla del: ${base}======`.underline.red)
            console.log (consola);

        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt` ;
        
        
    } catch (error) {
        throw error;
    }

}
// const crearArchivo= ( base ) =>{


//     console.log (`=====Tabla del: ${base}======`)
//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i} \n`;   
//     }

//     console.log (salida);


//     fs.writeFileSync(`tabla-${base}.txt`, salida);


//     console.log (`tabla-${base}.txt creado` );
// }

module.exports = {
    crearArchivo
}
