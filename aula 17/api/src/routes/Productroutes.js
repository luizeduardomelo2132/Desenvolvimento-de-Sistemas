import { Router } from "express";

const router = Router();

console.log("Arquivo productRoutes carregado");

const products = [
    {
        id: 1,
        name: "Toyota Corolla",
        preco: 150000
    },

    {
        id: 2,
        name: "Honda Civic",
        preco: 160000
    },

    {
        id: 3,
        name: "Chevrolet Onix",
        preco: 85000
    },

    {
        id: 4,
        name: "Hyundai HB20",
        preco: 80000
    },

    {
        id: 5,
        name: "Volkswagen Gol",
        preco: 45000
    },

    {
        id: 6,
        name: "Fiat Uno",
        preco: 35000
    },

    {
        id: 7,
        name: "Jeep Renegade",
        preco: 130000
    },

    {
        id: 8,
        name: "Ford Mustang",
        preco: 500000
    },

    {
        id: 9,
        name: "BMW 320i",
        preco: 310000
    },

    {
        id: 10,
        name: "Audi A3",
        preco: 280000
    },

    {
        id: 11,
        name: "Porsche 911",
        preco: 900000
    },

    {
        id: 12,
        name: "Nissan Kicks",
        preco: 110000
    },

    {
        id: 13,
        name: "Renault Kwid",
        preco: 70000
    },

    {
        id: 14,
        name: "Fiat Toro",
        preco: 140000
    },

    {
        id: 15,
        name: "Toyota Hilux",
        preco: 260000
    },

    {
        id: 16,
        name: "Chevrolet Tracker",
        preco: 120000
    }
];


router.get("/", (req, res) => {
    console.log("Entrou na rota GET /products");

    res.json(products);
});

router.post("/", (req, res) => {
    console.log("Entrou na rota POST /products");

    const newProduct = {  
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        preco: req.body.preco
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

router.delete("/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`Entrou na rota DELETE /products/${productId}`);
    
    const productIndex = products.findIndex((p) => p.id === productId);

    const deletedProduct = products.splice(productIndex, 1)[0];
    res.json(deletedProduct);
});

export default router;