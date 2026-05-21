import style from './style.module.scss'
import { Link } from 'react-router-dom'

export default function NavBar(props: any) {
    return (
        <nav className={style.navbar}>
            <div>
                <button
                    onClick={() => props.setSideBarOpen(true)}
                >Menu</button>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/products/">Produtos</Link>
                <Link to="/countries//">Paises</Link>
            </div>
        </nav>
    );
}
