import React, { useEffect, useState } from "react";
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";

export default () => {

    const [movielist, setMovieList] = useState([]);

    useEffect (() => {
        const loadAll = async () => {
            // Pegando os dados da API
            console.log()
            let list = await tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {movielist.map((item, key) => (
                    <MovieRow key={key} title={item.title} item={item.items}/>
                ))}
            </section>
        </div>
    )
}