import axios from 'axios'
import { BASE_URI } from '../utils/constValue';
import { GET_REPOSITORIES } from './types';


export const _fetchRepositories = (page_nb) => async dispatch =>{

    console.log('page numero', page_nb)

    try {
        const response = await axios.get(`${BASE_URI}&sort=stars&order=descpage=${page_nb}`);
        console.log(response);

        dispatch({
            type: GET_REPOSITORIES,
            payload: response.data
        });


    } catch (error) {
        console.error(error)
    }





}