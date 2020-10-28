# Personal Profile 🎬

[![Netlify Status](https://api.netlify.com/api/v1/badges/7a31295a-2296-4f0e-9518-61a9d91c223c/deploy-status)](https://app.netlify.com/sites/valero/deploys)

## Portafolio personal creado con Reactjs

#### Start Up 🚀

En mi portafolio personal hice una amalgama de todas las tecnologias que he tocado tratando de no convertir un frankenstain mi SPA.

#### Bug 🐛🐛🐛

Durante la etapa de Deploy con Netifly existo un bug de redireccionamiento que fue arreglado con la siguiente linea de codigo:

```json
[build]
  command = "npm run build"
  publish = "/build"
  base = "/"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200

```

Creando un Archivo `netlify.toml` en la Raiz de la carpeta de `/public`

---

#### Puntos Relevantes en la etapa de desarrollo: 🤯🤯🤯:

- Uso de Redux para Cambiar la App de lenguaje
- Uso de Variables y Mixins con Sass
- Manejo de Data global con archivo `data.js`
- Manejo de Animaciones con libreria AOS

---

#### Tecnologias y Herramientas usadas: ⌨️ :

- HTML3, Sass, JavaScript
- Reactjs
- React-Router-Dom y Redux
- Bootstrap

---

#### SETUP 📋

##### Install

    npm install

---

##### Compiles and hot-reloads for development

    npm run start

---

##### Compiles and minifies for production

    npm run build

---

### Autor:

##### [Jose Valero](https://www.linkedin.com/in/josemiguelvalero/ 'Jose Valero') 👨‍🎓
