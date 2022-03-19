import app from './app.js';

// Escolhendo a porta
const port = 3001;

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})

