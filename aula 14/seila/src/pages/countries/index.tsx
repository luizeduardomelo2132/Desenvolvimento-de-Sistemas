import styles from './style.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Countries() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
    const res = await axios.get(
         'https://restcountries.com/v3.1/all?fields=name,flags'
    );

    setCountries(res.data);
}

    console.log(countries)
    return (
        <>
            <h1 className={styles.countries}>Lista de paises</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { countries.map((country: any) => (
                    <div className="col" key={country.name.common}>
                        <div className="card h-100">
                        <img src={country.flags.png} className="card-img-top" alt={country.name.common}/>
                        <div className="card-body">
                            <h5 className="card-title">{country.name.common}</h5>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}