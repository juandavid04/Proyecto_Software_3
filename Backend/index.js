const express = require('express');
const routerApi = require('./Routes/Index');
const cors = require('cors');



//const routerApi = require('./routes')

const app = express();
const port = 8081;

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

/*
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});


*/
app.listen(port, () => {
  console.log('Mi port: ' + port)
});
routerApi(app)


