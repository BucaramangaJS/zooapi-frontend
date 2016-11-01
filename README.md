# ZooAPI Frontend

[![bucaramangajs](https://img.shields.io/badge/bucaramangajs-project-009bd4.svg)](http://bucaramangajs.org)

> **Este proyecto no fue completado y actualmente es obsoleto.**

> Taller de desarrollo JavaScript para el segundo Meetup de [BucaramangaJS.org](http://bucaramangajs.org).

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

## Anatomía

La arquitectura de archivos de la aplicación se ha definido de la siguiente manera:

- `src/` - Código fuente de la aplicación.
  - `js/` - Código JavaScript.
    - `models/` - Modelos de datos.
    - `collections/` - Colecciones de datos.
    - `routers/` - Enrutadores de la aplicación.
    - `app/` - Controladores de la aplicación en general.
      - `templates/` - Plantillas de Underscore.
      - `views/` - Vistas.
      - `app.js` - Punto de entrada de la lógico.
    - `principal/` - Controladores de la sección "Principal" de la aplicación.
      - `templates/`
      - `views/`
      - `principal.js`
    - `animals/` - Controladores de la sección "Animales" de la aplicación.
      - `templates/`
      - `views/`
      - `animals.js`
    - `animalsCreate/` - Controladores de la sección "Crear Animal" de la aplicación.
      - `templates/`
      - `views/`
      - `animalsCreate.js`
    - `settings.json` - Configuración de la aplicación.
    - `configure.js` - Scripts de configuraciones para la aplicación.
    - `main.js` - Punto de entrada de la aplicación.
    - `data.js` - Módulo de administración de los datos de la aplicación.
    - `state.js` - Módulo de la administración de estados de la aplicación.
- `assets/` - Código resultante y compilado para la aplicación.
  - `/img/` - Imágenes.
  - `/css/` - Archivos CSS.
  - `/js/` - Scripts JavaScript.
  - `favicon.jpg`
  - `index.html` - Página HTML del Single Page Application.
- `package.json` - Definición de la aplicación en Node y NPM.
- `index.js` - Punto de entrada del servidor para la aplicación frontend.

## Desarrollo

Para administrar modularmente el código JavaScript, se usa **[Browserify](http://browserify.org/)**.

Mientras se escribe el código de la aplicación, para generar el JavaScript final de la aplicación, en la carpeta del proyecto ejecutar:

```bash
browserify -t stringify -e src/js/main.js -o assets/js/app.js
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
