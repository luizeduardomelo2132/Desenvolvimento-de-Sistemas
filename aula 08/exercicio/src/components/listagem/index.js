    import { useState } from 'react';
    import styles from './style.modules.scss';

    export default function Lista() {
    const [items, setItems] = useState([
        { id: 1, nome: 'Resident Evil' },
        { id: 2, nome: 'Uncharted' },
        { id: 3, nome: 'Mario' }
    ]);

    const [novoItem, setNovoItem] = useState('');

    
    const adicionarItem = () => {
        if (novoItem.trim() === '') return;

        const novo = {
        id: Date.now(),
        nome: novoItem
        };

        setItems([...items, novo]);
        setNovoItem('');
    };


    const excluirItem = (id) => {
        const listaAtualizada = items.filter(item => item.id !== id);
        setItems(listaAtualizada);
    };

    return (
        <div>
        <h2>Lista de Jogos</h2>

        
        {items.map(item => (
            <div key={item.id} className={styles.list}>
            {item.nome}
            <button onClick={() => excluirItem(item.id)}>
                excluir
            </button>
            </div>
        ))}

        
        <input
            type="text"
            placeholder="jogo"
            value={novoItem}
            onChange={(e) => setNovoItem(e.target.value)}
        />

        <button onClick={adicionarItem}>Inserir</button>
        </div>
    );
    }