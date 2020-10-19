//==============
// Puerto
//==============

process.env.PORT = process.env.PORT || 3000;

//==============
// Entorno
//==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============
// Base de datos
//==============
let urlDB;

//urlDB = 'mongodb+srv://LYCB:Pbc6U08feVBiHZ4K@cluster0.svnnx.mongodb.net/koffe';

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/koffe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;