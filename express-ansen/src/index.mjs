import express, { request, response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    { id: 1, username: "Dare", displayName: "tunmise" },
    { id: 2, username: "bolu", displayName: "taiwo" },
    { id: 3, username: "damilola", displayName: "damilola_dare" },
    { id: 4, username: "chinedu", displayName: "chinedu_okeke" },
    { id: 5, username: "zainab", displayName: "zainy_zee" },
    { id: 6, username: "femi", displayName: "femi_the_dev" },
    { id: 7, username: "uche", displayName: "uche_nwa" },
    { id: 8, username: "amaka", displayName: "maka_chukwu" },
    { id: 9, username: "yusuf", displayName: "yusuf_ade" }
];

const mockProducts = [
    {id: 123, name: "gizzard", price: 2500 },
    {id: 234, name: "carrot", price: 500 },
    {id: 347, name: "onions", price: 800 }
]

app.get('/', (request, response)=> {
    response.status(201).send({ msg: "Server Says Hello World!"});
})

app.get('/api/users', (request, response) => {
    console.log(request.query)
    response.send(mockUsers);
});

app.get('/api/users/:id', (request, response)=> {
    console.log(request.params);
    const parseId = parseInt(request.params.id);
    console.log(parseId)
    if(isNaN(parseId)) return response.status(400).send({ msg: "Bad Request. Invalid ID"});

    const findUser = mockUsers.find((user)=> user.id === parseId);
    if(!findUser) return response.sendStatus(400);
    return response.send(findUser);
})

app.get('/api/products', (request, response)=> {
    response.send(mockProducts)
})

app.get('/api/products/:id', (request, response)=> {
    const parseId = parseInt(request.params.id);
    if(isNaN(parseId)) return response.status(400).send({msg: "not a valid id, nigga!"});

    const findProduct = mockProducts.find((product)=> product.id === parseId );
    if(!findProduct) return response.sendStatus(400);
    return response.send(findProduct)
})

app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);
})