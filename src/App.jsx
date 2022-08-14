import React, { useEffect, useState } from "react";

import tmdb from './utils/tmdb';
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from './components/Header'

import './App.css'

export default () => {

  const [movielist, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      setMovieList(list);
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      let choseninfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(choseninfo)
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrolListener = () => {
      if(window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrolListener)

    return () => {
      window.removeEventListener('scroll', scrolListener)
    }
  }, []);
  return (
    <div className="page">
      
      <Header black={blackHeader} />

      {featureData &&
        <FeatureMovie item={featureData} />
      }
      <section className="lists">
        {movielist.map((item, key) => (
          <MovieRow key={key} title={item.title} item={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> por Bruno Santos <br/>
        Direitos de imagem para Netflix <br/>
        Dados pegos pela API <a className="LinkMovie" href="https://www.themoviedb.org/?language=pt-BR">themoviedb.org</a>
      </footer>

      {movielist <= 0 && 
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
        </div>
      }
    </div>
  )
}