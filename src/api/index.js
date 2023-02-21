import axios from 'axios';

const client = axios.create({
    baseURL:'https://newsapi.org/v2/'
});

const API_KEY = '98e352678056414db4ff30ab3eb4e00f'

const fetchNews = async (category) => {
    try {
        const { data } = await client.get('top-headlines',{
            params:
                {
                    country: 'us',
                    category,
                    apiKey:API_KEY
                }
        })
        return data;
    }
    catch ( e ) {
        console.log(e);
    }
}

const searchNews = async (category,searchTerm) => {
    try {
        const { data } = await client.get('top-headlines',{
            params:
                {
                    country: 'us',
                    category,
                    q:searchTerm,
                    searchIn:'title',
                    apiKey:API_KEY
                }
        })
        return data;
    }
    catch ( e ) {
        console.log(e);
    }
}


const fetchLatestNews = async (page,sources) => {
    try {
        const { data } = await client.get('everything',{
            params:
                {
                    language: 'en',
                    sortBy:'publishedAt',
                    pageSize:20,
                    page,
                    sources,
                    apiKey:API_KEY
                }
        })
        return data;
    }
    catch ( e ) {
        console.log(e);
    }
}

const fetchSources = async () => {
    try {
        const { data } = await client.get('top-headlines/sources',{
            params:
                {
                    language: 'en',
                    country: 'us',
                    apiKey:API_KEY
                }
        })
        return data;
    }
    catch ( e ) {
        console.log(e);
    }
}

export {
    fetchNews,
    searchNews,
    fetchLatestNews,
    fetchSources
};