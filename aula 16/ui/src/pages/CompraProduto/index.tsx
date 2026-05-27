import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Cliente {
    _id: string;
    nome: string;
}

interface Produto {
    _id: string;
    nome: string;
    preco: number;
}

export default function CompraProduto() {
    const navigate = useNavigate();
    
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    
    const [clienteId, setClienteId] = useState("");
    const [produtoId, setProdutoId] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    useEffect(() => {
        const carregarDados = async () => {
            try {
                // Buscando em paralelo para evitar travamento de estados
                const [resClientes, resProdutos] = await Promise.all([
                    axios.get("http://localhost:3000/cliente/"),
                    axios.get("http://localhost:3000/produto/")
                ]);

                // Verificando no console se a estrutura veio correta
                console.log("Resposta Clientes:", resClientes.data);
                console.log("Resposta Produtos:", resProdutos.data);

                // Garantindo a atribuição segura dos dados
                if (resClientes.data && resClientes.data.data) {
                    setClientes(resClientes.data.data);
                }
                
                if (resProdutos.data && resProdutos.data.data) {
                    setProdutos(resProdutos.data.data);
                }

            } catch (error: any) {
                console.error("Erro ao carregar dados:", error);
                setErro("Não foi possível carregar a lista de clientes ou produtos.");
            }
        };

        carregarDados();
    }, []);

    const finalizarCompra = async (event: any) => {
        event.preventDefault();

        if (!clienteId || !produtoId || !quantidade || quantidade < 1) {
            setErro("Por favor, preencha todos os campos corretamente.");
            return;
        }

        try {
            setErro("");
            
            await axios.post("http://localhost:3000/compra/", {
                clienteId,
                produtoId,
                quantidade: Number(quantidade)
            });

            setSucesso("Compra registrada com sucesso!");
            
            setClienteId("");
            setProdutoId("");
            setQuantidade(1);

            setTimeout(() => {
                navigate("/produtos");
            }, 2000);

        } catch (error: any) {
            console.error("Erro ao finalizar compra:", error);
            setErro(error.response?.data?.message || "Erro ao registrar a compra.");
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '12px' }}>
                        <h2 className="text-center mb-4" style={{ fontWeight: 600 }}>Nova Compra</h2>
                        
                        {erro && <div className="alert alert-danger py-2">{erro}</div>}
                        {sucesso && <div className="alert alert-success py-2">{sucesso}</div>}

                        <form onSubmit={finalizarCompra}>
                            {/* Seleção de Cliente */}
                            <div className="mb-3">
                                <label htmlFor="cliente" className="form-label" style={{ fontWeight: 500 }}>Cliente</label>
                                <select
                                    className="form-select"
                                    id="cliente"
                                    value={clienteId}
                                    onChange={(e) => setClienteId(e.target.value)}
                                >
                                    <option value="">-- Selecione o Cliente --</option>
                                    {clientes && clientes.length > 0 && clientes.map((cliente) => (
                                        <option key={cliente._id} value={cliente._id}>
                                            {cliente.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Seleção de Produto */}
                            <div className="mb-3">
                                <label htmlFor="produto" className="form-label" style={{ fontWeight: 500 }}>Produto</label>
                                <select
                                    className="form-select"
                                    id="produto"
                                    value={produtoId}
                                    onChange={(e) => setProdutoId(e.target.value)}
                                >
                                    <option value="">-- Selecione o Produto --</option>
                                    {produtos && produtos.length > 0 && produtos.map((produto) => (
                                        <option key={produto._id} value={produto._id}>
                                            {produto.nome} - R$ {produto.preco}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Campo de Quantidade */}
                            <div className="mb-4">
                                <label htmlFor="quantidade" className="form-label" style={{ fontWeight: 500 }}>Quantidade</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantidade"
                                    min="1"
                                    value={quantidade}
                                    onChange={(e) => setQuantidade(Number(e.target.value))}
                                />
                            </div>

                            <div className="d-flex gap-3">
                                <Link to="/" className="btn btn-light w-50" style={{ borderRadius: '6px' }}>
                                    Voltar
                                </Link>
                                <button type="submit" className="btn btn-success w-50" style={{ borderRadius: '6px' }}>
                                    Confirmar Venda
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}