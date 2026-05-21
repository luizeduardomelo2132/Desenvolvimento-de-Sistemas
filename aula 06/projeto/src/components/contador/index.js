import './style.css'
import {    useState    } from 'react';

export default function Contador() {
    // const [num, setNum] = useState(0);
    const [resultado, setResultado] = useState("Falso");

    function verificar(valor) {
        if(valor>10){
            setResultado("Verdadeiro")
        } else {
            setResultado("Falso")
        }
    }
    // function incrementar() {
    //     setNum(num + 1)
    // }

    // function descrementar() {
    //     setNum(num - 1)
    // }

    return (
        <div className='pagina'>
            {/* <h1>Contador</h1> */}
            <h3>É maior que 10?</h3>
            <input type='text' onChange={(e) => verificar(e.target.value)}></input> 
            <p>{resultado}</p>

            {/* <button onClick={incrementar}>+</button>
            <p>{num}</p>
            <button onClick={descrementar}>-</button>  */}
        </div> 
    )
}
