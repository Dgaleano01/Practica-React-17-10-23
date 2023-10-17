import express from 'express';

const APP = express();
const PORT = 3000;

APP.use(express.json())

APP.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})