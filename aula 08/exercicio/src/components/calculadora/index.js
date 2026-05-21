import { useState, useEffect, useRef } from "react";
import styles from './styles.module.scss';

export default function Calculadora()
{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [vezes, setVezes] = useState(0);
    const [soma, setSoma] = useState(0);
    const [menos, setMenos] = useState(0);
    const [dividir, setDividir] = useState(0);

    useEffect(() => {
        setVezes(num1 * num2);
        setSoma(num1 + num2);
        setMenos(num1 - num2);
        setDividir(num1 / num2);
    }, [num1, num2]);

    const referencia = useRef(null);

    function handleBlur() {
        if (num1 < 5) {
            setNum1(0);
        }
        if (num2 < 5) {
            setNum2(0);
        }
    }

    return (
        <div className={styles.calculadora}>
            <h1>Calculadora</h1>
            <div className={styles.inputs}>
                <input
                    ref={referencia}
                    type="number"
                    onChange={(e) => setNum1(Number(e.target.value))} 
                    placeholder="Número 1"
                    onBlur={handleBlur}
                    value={num1}
                />
                <input
                    ref={referencia}
                    type="number"
                    onChange={(e) => setNum2(Number(e.target.value))}
                    placeholder="Número 2"
                    onBlur={handleBlur}
                    value={num2}
                />
            </div>
            <div className={styles.final}>
                <p className={styles.resultado}>Multiplicação: {vezes}</p>
                <p className={styles.resultado}>Soma: {soma}</p>
            </div>
            <div className={styles.final}>
                <p className={styles.resultado}>Subtração: {menos}</p>
                <p className={styles.resultado}>Divisão: {dividir}</p>
            </div>
        </div>
    );
}
