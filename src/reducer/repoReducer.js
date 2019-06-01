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
            return (nextState = {
              ...state,
              loading: false,
              repositoriesData: getJustThisData(payload)
            });


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
           stargazers_count : data.stargazers_count,
           has_issues: data.has_issues,
           open_issues_count: data.open_issues_count,
           avatar_url : data.owner.avatar_url,
           html_url:data.html_url,
           description : data.description

         };
     })
 }