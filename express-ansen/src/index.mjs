import express, { request, response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request, response)=> {
    response.status(201).send({ msg: "Server Says Hello World!"});
})

app.get('/api/users', (request, response) => {
    response.send([
        {id: 1, username: "Dare", displayName: "dare_tunmise" },
        {id: 2, username: "bolu", displayName: "bolu_taiwo"},
        {id: 1, username: "damilola", displayName: "damilola_dare"}
    ])
});

app.get('/api/products', (request, response)=> {
    response.send([
        {id: 123, name: "gizzard", price: 2500 },
        {id: 234, name: "carrot", price: 500 },
        {id: 347, name: "onions", price: 800 }
    ])
})

app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);
})