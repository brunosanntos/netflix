import React, { useEffect, useState } from "react";
import tmdb from './tmdb';

export default () => {

    const [movielist, setMovieList] = useState([]);

    useEffect (() => {
        const loadAll = async () => {
            // Pegando os dados da API
            let list = await tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {movielist.map((item, key) => (
                    <div>
                        {item.title}
                    </div>
                ))}
            </section>
        </div>
    )
}