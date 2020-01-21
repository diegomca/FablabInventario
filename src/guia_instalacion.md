# **Montar Aplicación Inventario Fablab**

## Inicializar código fuente de la aplicación

Para realizar esta acción, es obligatorio tener instalado node.js en sus ultimas versiones, si no lo tiene instalado, puede obtenerlo haciendo [click aqui.](https://nodejs.org/en/)

Luego de realizar la instalación, para verificar si tiene Node.js instalado, ejecute este comando en su terminal:
| |
|-|
|`node -v`|
||
Para confirmar que tiene instalado npm, puede ejecutar este comando en su terminal:
| |
|-|
|`npm -v`|
||

Luego de realizar la verificación, ingrese vía terminal a la carpeta que se descargo o clono con los códigos correspondientes a la aplicación, dentro de ella se debe realizar los pasos que se presentan a continuación:

1. Para instalar los paquetes npm que utiliza la aplicación.

    `npm install`

2. Para realizar una prueba en localhost.
    
    `npm start` --> localhost:3000/

## Montar aplicación en hosting

Para poder montar la aplicación en el hosting, es necesario realizar los pasos explicados anteriormente, con la salvedad del ítem 2 (prueba en localhost).

Luego de tener los paquetes npm instalados, se procede a liberar la aplicación a producción y para esto se necesita compactar los archivos desarrollados. Cuando un usuario visita su sitio, cada uno de sus archivos requerirá una solicitud HTTP adicional , haciendo que su sitio sea más lento de cargar. Así que para remediar esto, puede crear una carpeta "build" de nuestra aplicación, que combina todos sus archivos CSS en un solo archivo, y hace lo mismo con su JavaScript. De esta manera, minimiza la cantidad y el tamaño de los archivos que obtiene el usuario. Para crear esta "compilación" , utiliza una "herramienta de compilación".


`npm run build `

Con este paso, se crea una carpeta de producción llamada build, es esta carpeta la que se debe montar en la raíz del hosting y no es necesario realizar ninguna otra acción.

## Base de datos

Dado que la base de datos es un servicio en línea ( Firebase de google ), para la obtención de datos y el uso de esta misma, no es necesario tener un servidor físico o espacio en memoria, todo está en línea y no se requiere alguna instalación.
Para obtener los datos de la cuenta Firebase, contactar a **inventariofablabuv@gmail.com**
