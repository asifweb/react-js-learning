import axios from 'axios'

const getRandomUser = async () => {
    let url = 'https://randomuser.me/api/';
    return await axios.get(url)
        .then(res => {
            return res.data.results[0];
        })
        .catch(error => {
            console.log(error)
        })
}

export const UserApi = {
    getRandomUser
}
