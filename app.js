const express = require('express');
const path = require('path');
const ejs = require('ejs');
const dotenv = require('dotenv').config();

const app = express();

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para renderizar las vistas EJS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.get('/perfil', (req, res) => {
    res.render('perfil');
});

app.get('/home', (req, res) => {
    res.render('home');
});
// Iniciar el servidor
app.listen(process.env.PORT, () => {
    console.log("Servidor en Puerto " + process.env.PORT + " | http://localhost:" + process.env.PORT);
});


//npm install express ( activar express)
//npm init -y ( activar node)
