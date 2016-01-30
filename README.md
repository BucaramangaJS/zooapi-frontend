# ZooAPI Frontend

> Taller de desarrollo para el segundo Meetup de [BucaramangaJS.org](http://bucaramangajs.org).

Red global de zoológicos.

## Instalación

### Herramientas del sistema

Es necesario tener instalado [NodeJS](http://nodejs.org) y [NPM](http://npmjs.org).

### Clonar proyecto

Para descargar el repositorio del proyecto usando **Git**:

```bash
git clone https://github.com/BucaramangaJS/zooapi-frontend.git
```

### Paquetes globales

Para desarrollar la aplicación, es necesario instalar globalmente:

```bash
npm install -g browserify
```

### Paquetes del proyecto

Para ejecutar el proyecto, se deben de instalar todos los **paquetes de npm** que la aplicación necesite.

Para hacer esto, estando en la carpeta del repositorio clonado escribir el comando:

```bash
npm install
```

## Desarrollo

Para administrar modularmente el código JavaScript, se usa **[Browserify](http://browserify.org/)**.

Mientras se escribe el código de la aplicación, para generar el JavaScript final de la aplicación, en la carpeta del proyecto ejecutar:

```bash
browserify -t stringify -e src/js/app.js -o assets/js/app.js
```

Esto compilará los módulos JavaScript que se administra desde el script principal `src/js/app.js` y se compila en el archivo `assets/js/app.js`.

Se utiliza el paquete [Stringify](https://www.npmjs.com/package/stringify) para poder utilizar plantillas HTML dentro de Browserify.

## Ejecutar servidor

Opcionalmente para ejecutar el servidor web con la aplicación, se hace uso de [Express](http://expressjs.com).

Para iniciar el servidor, ejecutar:

```bash
node index.js
```

## Licencia

[MIT](./LICENSE)
