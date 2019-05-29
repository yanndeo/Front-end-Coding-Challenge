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


    componentDidMount(){
        this.props._fetchRepositories()
    }


    renderRepositories = ()=>{

        if (this.props.current_repositories &&  !this.props.loading ){

           return this.props.current_repositories.map((repo, i) => {
                return <RepositoryItem
                            repo={repo}
                            key={i}
                        />
            });

        }else{
            return <Spinner/>
        }
       
    }

    render () {
        console.log('repos_current',this.props.current_repositories)
        return (
            <Fragment>
                { this.renderRepositories()}
            </Fragment>
        )
    }
}



RepositoryList.propTypes = {
  _fetchRepositories: PropTypes.func.isRequired,
  current_repositories: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = state =>({
    current_repositories: state.repo.repositoriesData,
    loading: state.repo.loading
})



export default connect(mapStateToProps, {_fetchRepositories})(RepositoryList);