import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header >
      <Link className='logo' to="/">Filmaria</Link>
      <Link className='favoritos' to="/favoritos">Salvos</Link>
    </header>
  );
}

export default Header;
