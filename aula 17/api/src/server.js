import express from "express";
import cors from "cors";
import productsRoutes from "./routes/Productroutes.js"; // Ajustado para a pasta routes
import connectdatabase from "./database/connection.js";
import dns from "node:dns";
import "dotenv/config";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
connectdatabase();

const app = express();

app.set('json spaces', 2);

console.log("ESTE É O SERVER.TS DA TECHSTORE");

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);

console.log("Rotas de produtos carregadas");

app.get("/", (req, res) => {
    res.json({
        message: "API está funcionando! "
    });
});

app.get("/teste", (req, res) => {
    res.send("Servidor de teste funcionando!");
});

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});