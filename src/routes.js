import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFoundError from "./pages/Error";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import Movie from "./pages/movie";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Routers;
