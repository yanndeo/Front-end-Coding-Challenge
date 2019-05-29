import axios from 'axios'
import { BASE_URI } from '../utils/constValue';
import { GET_REPOSITORIES } from './types';


export const _fetchRepositories = () => async dispatch =>{


    try {
        const response = await axios.get(`${BASE_URI}&sort=stars&order=desc`);
        console.log(response);

        dispatch({
            type: GET_REPOSITORIES,
            payload: response.data.items
        });


    } catch (error) {
        console.error(error)
    }





}