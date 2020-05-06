//file system
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('============================');
    console.log(`=========Tabla de ${base}=========`);
    console.log('============================');
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${i*base}`.green);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

//module es un objeto global accesible desde todo el proyecto
module.exports = {
    crearArchivo,
    listarTabla
}