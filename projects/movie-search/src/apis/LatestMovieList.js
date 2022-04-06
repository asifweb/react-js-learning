import axios from 'axios'

export const latestMovieList = async () => {
    try {

        const {data} = await axios.get(`https://latest-movies.p.rapidapi.com/movies`, {
            headers: {
                'x-rapidapi-host': 'latest-movies.p.rapidapi.com',
                'x-rapidapi-key': '1a7a9ed3c1msh0e2390794042612p1e906cjsna7e8ca8eaf85'
            }
        });

        return data;
        
    } catch (error) {
        console.error('Error while getting list of stories.');
    }
}