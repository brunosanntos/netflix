// Variaveis para pegar os dados da API
const API_KEY = '056c010b0d161edd28d00a8a79ada9d5';
const API_BASE = 'https://api.themoviedb.org/3';


// Arquivo JS para pegar os dados da API

// Curiosidade
// Await significa que vai ter que esperar uma resposta externa


/*
- Originais da netflix
- Recomendações (Trending)
- Em alta (top rated)
- Açao
- Comedia
- romance
- Documentario
- terror
*/

// Funçao auxiliar para pegar os json
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {

    getHomeList: async () => {
        return [
            {
                // Categoria
                slug: 'originals',
                //Titulo do filme (exibição)
                title: 'Originais do Netflix',
                //Array para retornar os dados
                items: await basicFetch(`/discover/tv?with_newtork=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'toprated',
                //Titulo do filme (exibição)
                title: 'Em Alta',
                //Array para retornar os dados
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'trending',

                //Titulo do filme (exibição)
                title: 'Recomendados para Você',

                //Array para retornar os dados
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'action',

                //Titulo do filme (exibição)
                title: 'Ação',

                //Array para retornar os dados
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'horror',
                //Titulo do filme (exibição)
                title: 'terro',
                //Array para retornar os dados
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'comedy',
                //Titulo do filme (exibição)
                title: 'Comedia',
                //Array para retornar os dados
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'romance',
                //Titulo do filme (exibição)
                title: 'Romance',
                //Array para retornar os dados
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                // Categoria
                slug: 'documentary',
                //Titulo do filme (exibição)
                title: 'Documentários',
                //Array para retornar os dados
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}