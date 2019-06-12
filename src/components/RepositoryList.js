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
        page:1,
        scrolling: false

    }

    componentDidMount(){
        this.props._fetchRepositories(this.state.page)

        this.scrollListener = window.addEventListener('scroll', (e)=>{
            this.handleScroll(e)
        })

    }


    handleScroll=(e)=>{
        const { totalPage, compeleted } = this.props;
        const { page , scrolling} = this.state

        if(scrolling) return
        if(totalPage <= page ) return
       // const lastDiv = document.querySelector('div.ml-auto > repository:last-child');
       // const lastDiv = document.querySelector('ml-auto');
        //console.log('last_div',lastDiv)


    }
  
  


    renderRepositories = ()=>{

        const { current_repositories, loading } = this.props

        if (current_repositories &&  !loading ){
           return current_repositories.map((repo, i) => {
                return <RepositoryItem repo={repo} key={i} />
            });

        }else{
            return <Spinner/>
        }
       
    }


    loadMore = () => {
            this.setState({ page : this.state.page + 1} , ()=>{

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
                <button className="btn btn-default" onClick={()=>this.loadMore()} >LOAD MORE</button>
            </Fragment>
        )
    }
}



RepositoryList.propTypes = {
  _fetchRepositories: PropTypes.func.isRequired, //action redux
  current_repositories: PropTypes.array,     //Store
  loading: PropTypes.bool,
  totalPage: PropTypes.number,
  compeleted: PropTypes.bool,
};

const mapStateToProps = state =>({
    current_repositories: state.repo.repositoriesData,
    totalPage: state.repo.totalPage,
    compeleted: !state.repo.incomplete_results,
    loading: state.repo.loading
})



export default connect(mapStateToProps, {_fetchRepositories})(RepositoryList);