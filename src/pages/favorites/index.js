import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './favorites.css'

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const my_list = localStorage.getItem('movies');
    setMovies(JSON.parse(my_list) || []);

  }, [])

  const handleDelete = (movie_id) => {
    let filter_movies = movies.filter((movie) => {
      return (movie.id !== movie_id)
    });

    setMovies(filter_movies);
    localStorage.setItem('movies', JSON.stringify(filter_movies));
    toast.success('Filme excluido com sucesso')
  }

  return (
    <div id="my-movies">
      <h1>Meus Filmes</h1>

      {!movies.length && <span>Você não possui nenhum filme salvo!</span>}

      <ul>
        {movies.map((movie) => {
          return (
            <li>
              <span>{movie.nome}</span>

              <div className="buttons">
                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                <button onClick={ () => handleDelete(movie.id) }>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Favorites;
