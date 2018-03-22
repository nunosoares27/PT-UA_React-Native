import axios from 'axios';

export const FETCH_NOTICIAS = 'FETCH_NOTICIAS';

export function fetchNoticias(){

    const request = axios.get('http://ptua.desenvolvimento/api/noticias');
    return {
        type: FETCH_NOTICIAS,
        payload: request,
    };

}
