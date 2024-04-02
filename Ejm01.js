const fs = require('node:fs/promises')
 fs.writeFile('archivo2b.txt', 'línea 1\n Línea 2\n creado con promesas')
 .then(()=>{
    console.log('El archivo de texto fue creado empleando promesas')
 }).catch(error=>{
    console.log(error)
 })

console.log('última linea del programa')