import { GET_REPOSITORIES } from '../action/types';

const initialState= {
    loading: true,
    repositoriesData : []
};



export default function(state =initialState , action){

let nextState;
const { type, payload } = action;

    switch(type){

        case GET_REPOSITORIES:
            return nextState = {
                ...state,
                loading: false, 
                repositoriesData: payload 
            };


        default:
              return nextState || state ;
    }

}