import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import './home.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const load_movies = async () => {
      const response = await api.get('r-api/?api=filmes')
      setMovies(response.data)
    }

    load_movies()
  }, [])

  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.nome}</strong>
              <img src={movie.foto} alt={movie.nome}></img>
              <Link to='/'>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
