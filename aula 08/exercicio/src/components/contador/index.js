import { useState } from 'react';
import styles from './style.modules.scss';

export default function Contador()
{
    const [ valor, setValor ] = useState(0);

    
    return (
        <>
            <p>{valor}</p>
            <div>
                {
                    valor == 0 ? <></> :
                    <button
                        className={styles.button}
                        onClick={() => setValor(0)}
                    >-5</button>
                }
                { 
                    valor == 5 ? <></> : 
                    <button 
                        className={styles.button}
                        onClick={() => setValor(5)}
                    >+5</button>
                }
            </div>
        </>
    );
}