import { GET_REPOSITORIES } from '../action/types';

const initialState = {
  loading: true,
  repositoriesData: [],
  page: 1,
  totalPages: null,
  incomplete_results: true
};

const per = 30;



export default function(state =initialState , action){

let nextState;
const { type, payload } = action;

    //console.log(payload.total_count)

    switch(type){

        case GET_REPOSITORIES:
            return nextState = {
              ...state,
              loading: false,
              repositoriesData: [...state.repositoriesData, ...getJustThisData(payload.items) ],
              totalPages: Math.round(payload.total_count / per),
              incomplete_results: payload.incomplete_results
            };


        default:
              return nextState || state ;
    }

}

/**
 * Filter what we want
 */

function getJustThisData(datas){
    return datas.map( data=>{

         return {
             name: data.name,
             language: data.language,
             stargazers_count: data.stargazers_count,
             has_issues: data.has_issues,
             open_issues_count: data.open_issues_count,
             avatar_url: data.owner.avatar_url,
             html_url: data.html_url,
             description: data.description,
           //homepage: data.homepage

         };
     })
 }