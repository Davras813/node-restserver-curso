//==============
// Puerto
//==============

process.env.PORT = process.env.PORT || 3000;

//==============
// Entorno
//==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============
// Vencimiento del Token
//==============
// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//==============
// SEED de autenticación
//==============
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

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

//======================
// Google Client ID
//======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1021226897714-2949m8augut06hm1kcrnlu854ug7ujhb.apps.googleusercontent.com';