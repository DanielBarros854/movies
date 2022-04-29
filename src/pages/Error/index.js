import { Link } from 'react-router-dom';
import './notFoundError.css'

const NotFoundError = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to='/'>Veja todos os filmes aqui</Link>
    </div>
  )
}

export default NotFoundError;
