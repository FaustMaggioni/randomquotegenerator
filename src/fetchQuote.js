import axios from "axios";

export const fetchQuote = () => {
    const options = {
        method: 'GET',
        url: 'https://famous-quotes4.p.rapidapi.com/',
        headers: {
            'x-rapidapi-key': 'd14c429147mshba89ae8805d1b6cp1ad4a4jsn1ea59f3d4c3a',
            'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
        }
    };

    const res = axios.request(options).then(function (response) {
        return (response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return res

}