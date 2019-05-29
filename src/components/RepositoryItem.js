import React from 'react'
import PropTypes from 'prop-types'


/**
 * 
 * Receive props from list 
 * and modelize a item
 */
const RepositoryItem = ({repo}) => {

    //let issues = parseFloat(repo.stargazers_count);
   // console.log(issues)

    return (
        <div className="media col-sm-12 col-md-12 col-lg-12 p-4 border mb-3" >
            <div className="col-sm-2 col-lg-2 mb-2 pull-left" data-aos="fade-up">
                <figure className="block-4-image">
                    <img className="align-self-center mr-3 img-fluid" src={repo.owner.avatar_url} alt="" />
                </figure>
            </div>

            <div className="media-body">
                <a href={repo.html_url}> <span className=" text-primary h6 text-uppercase">{repo.name} </span></a>
                <p className="">{repo.description} | <b>Language:</b> "<i> {repo.language && repo.language  } </i>" </p>
                <p>
                    <a href="#!" className="btn btn-primary">Stars: {repo.stargazers_count} </a> &nbsp; &nbsp;
                      <a href="#!" className="btn btn-primary "> Issues :{repo.has_issues ? repo.open_issues_count : 'none'} </a>
                    <span> &nbsp; Submitted 30 days ago by tensorflow </span>
                </p>
            </div>
        </div>
    )
}

RepositoryItem.propTypes = {

    repo: PropTypes.object.isRequired,
}

export default RepositoryItem
