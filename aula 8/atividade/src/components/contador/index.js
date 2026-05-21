import './style.css'
import {    useState    } from 'react';

export default function Contador() {
    const [cal, setcal] = useState(0);

    function adicao(a, b) {
        a + b
    }
    function subtracao(a, b) {
        a - b
    }
    function multiplicacao(a, b) {
        a * b
    }
    function divisao(a, b) {
        a / b
    }

    return (
        <div className='pagina'>
            <h1>Calculadora</h1>
            <input></input>
            <input></input>
            
        </div> 
    )
}
