import styles from './style.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products);
    }

    return (
        <>
            <h1 className={styles.products}>Lista dos produtos</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { products.map((product: any) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                        <img src={product.images[0]} className="card-img-top" alt={product.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}