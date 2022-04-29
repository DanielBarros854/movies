import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './movie.css'

const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate();

  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load_movie = async () => {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        navigate('/')
        return;
      }

      setMovie(response.data);
      setLoading(false)
    }

    load_movie();

    return () => {

    }
  
  }, [id, navigate])

  if (loading) {
    return (
      <div className='loading-movie' >
        <h1>Carregando filme...</h1>
      </div>
    )
  }

  const saveMovie = () => {

    const my_list = localStorage.getItem('movies');
    let saved_movies = JSON.parse(my_list) || []; 

    const has_movie = saved_movies.some((saved_movie) => saved_movie.id === movie.id);

    if (has_movie) {
      alert('Você ja possui esse filme salvo.');
      return;
    }

    saved_movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(saved_movies));
    alert('Filme salvo com sucesso');
  }

  return (
    <div className='movie-info'>
      <h1>{movie.nome}</h1>
      <img src={movie.foto} alt={movie.nome}/>
      <h3>Sinopse</h3>
      {movie.sinopse}

      <div className='buttons'>
        <button onClick={ saveMovie }>Salvar</button>
        <button><a target='_blank' rel='noreferrer' href={`https://www.youtube.com/results?search_query=${movie.nome} Trailer`}>Trailer</a></button>
      </div>
    </div>
  )
};

export default Movie;
