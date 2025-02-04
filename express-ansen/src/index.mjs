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

const blogPosts = [
    {
        id: 1,
        title: "The Rise of JavaScript Frameworks",
        author: "Dare Tunmise",
        content: "JavaScript frameworks have transformed web development, making it faster and more efficient. In this post, we explore the top frameworks in 2025 and how they compare.",
        datePublished: "2025-02-03",
        tags: ["JavaScript", "Web Development", "Frontend"]
    },
    {
        id: 2,
        title: "Mastering Node.js for Backend Development",
        author: "Bolu Taiwo",
        content: "Node.js has become the backbone of modern backend development. This guide covers key concepts, best practices, and performance optimization techniques.",
        datePublished: "2025-01-28",
        tags: ["Node.js", "Backend", "API Development"]
    },
    {
        id: 3,
        title: "The Art of Writing Clean Code",
        author: "Damilola Dare",
        content: "Writing clean code is an essential skill for developers. We discuss principles from books like 'Clean Code' by Robert C. Martin and how they apply to real-world projects.",
        datePublished: "2025-01-15",
        tags: ["Programming", "Best Practices", "Software Engineering"]
    },
    {
        id: 4,
        title: "Understanding SEO in 2025",
        author: "Chinedu Okeke",
        content: "SEO is constantly evolving. This article breaks down the latest trends, Google's algorithm updates, and strategies to rank higher in search results.",
        datePublished: "2025-02-01",
        tags: ["SEO", "Digital Marketing", "Google"]
    },
    {
        id: 5,
        title: "Building Scalable Web Applications",
        author: "Zainab Yusuf",
        content: "Scaling a web app requires planning and strategy. Here’s a deep dive into database optimization, caching, and load balancing techniques.",
        datePublished: "2025-01-20",
        tags: ["Web Development", "Scalability", "Performance"]
    }
];


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
    const parseId = parseInt(request.params.id)
    if(isNaN(parseId)) return response.status(400).send({msg: "invalid request"})

    const findProduct = mockProducts.find((mockProduct)=> mockProduct.id === parseId)
    if(!findProduct) return response.sendStatus(400)
        return response.send(findProduct);
})


app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);
})