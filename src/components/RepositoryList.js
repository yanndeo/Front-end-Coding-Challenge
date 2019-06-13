import React, { Component , Fragment} from 'react'
import PropTypes from "prop-types";
//Components
import RepositoryItem from './RepositoryItem';
import Spinner from "./layouts/Spinner";
//Redux
import { connect } from 'react-redux';
//Action
import { _fetchRepositories } from '../action/repo';



class RepositoryList extends Component {

    state = {
        page:0,
        scrolling: false,
        loading: true

    }

    componentDidMount(){
       
        //this.props._fetchRepositories(this.state.page)

        this.loadDatas()

        this.setState({ loading :false})

        this.scrollListener = window.addEventListener('scroll', (e)=>{

            this.handleScroll(e)
        })

    }


    loadDatas = async ()=>{
       await this.setState({ loading : true });
        this.setState({ loading:false}, ()=>{
            this.props._fetchRepositories(this.state.page)
        })
    }



    handleScroll=(e)=>{

        const { totalPage } = this.props;
        const { page} = this.state

        //if(scrolling) return
        if(totalPage <= page ) return
        const lastDiv = document.getElementById("container").lastElementChild
        let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight //7063
        let pageOffset = window.pageYOffset + window.innerHeight    //7325
        let bottomOffset = 20

        if(pageOffset > lastDivOffset - bottomOffset ) this.loadMore()

    }
  
  
    
    /**
     * Boucle l'ensemble des items
     * ou affiche le spinner
     */

    renderRepositories = ()=>{


        const { current_repositories } = this.props

        if (current_repositories && !this.state.loading ){

           return current_repositories.map((repo, i) => {

                return <RepositoryItem repo={repo} key={i} />
            });

        }else{
            return <Spinner/>
        }
       
    }


    /**
     * set le numero de page puis lance
     * la requete via un callback
     * affiche plus d'item
     */
    loadMore = () => {
            this.setState({ loading: true})
            this.setState({ loading:false, scrolling:true,  page : this.state.page + 1} , ()=>{
                let num_page = this.state.page
                console.log(num_page)
                this.props._fetchRepositories(num_page)
            })
    }



    render () {
    
        console.log('repos_current',this.props.current_repositories)
        return (
            <Fragment>
                { this.renderRepositories() }
                {/* <button className="btn btn-default" onClick={()=>this.loadMore()} >LOAD MORE</button> */}
            </Fragment>
        )
    }
}



RepositoryList.propTypes = {
  _fetchRepositories: PropTypes.func.isRequired, //action redux
  current_repositories: PropTypes.array,     //Store
  //loading: PropTypes.bool,
  totalPage: PropTypes.number,
  compeleted: PropTypes.bool,
};

const mapStateToProps = state =>({
    current_repositories: state.repo.repositoriesData,
    totalPage: state.repo.totalPage,
    compeleted: !state.repo.incomplete_results,
    //loading: state.repo.loading
})



export default connect(mapStateToProps, {_fetchRepositories})(RepositoryList);