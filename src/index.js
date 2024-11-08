import express from 'express';

const PORT = 3000; //port number

const app = express(); //create express app server instance

app.get('/', (req,res) => {
    return res.send('Home');
});

app.get('/ping', (req,res) => {
    return res.json({message:'pong'});
});

app.get('/hello', (req,res) => {
    return res.json({message:'Hello world'});
});

app.listen(PORT,() =>{
    console.log('server is running on port ${PORT}');
});