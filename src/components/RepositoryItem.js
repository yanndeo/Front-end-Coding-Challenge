import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from '../utils/formatNumber';
import Moment from "react-moment";



/**
 * 
 * Receive props from list 
 * and modelize a item
 */
const RepositoryItem = (props) => {

    const {
      name,
      avatar_url,
      language,
      stargazers_count,
      has_issues,
      open_issues_count,
      html_url,
      description,
      created_at
    } = props.repo;



    return (
        <div className="media col-sm-12 col-md-12 col-lg-12 p-4 border mb-3 repository" >

            <div className="col-sm-2 col-lg-2 mb-2 pull-left" data-aos="fade-up">

                <figure className="block-4-image">
                    <img className="align-self-center mr-3 img-fluid" src={avatar_url} alt="" />
                </figure>

            </div>

            <div className="media-body">

                <a href={html_url}> <span className=" text-primary h6 text-uppercase">{name} </span></a>
                <p className="">{description} | <b>Language:</b> "<i> {language ? language : 'none'  } </i> " </p>
                <p>
                    <a href="#!" className="btn btn-primary">Stars: {formatNumber(stargazers_count)} </a> &nbsp; &nbsp;
                    <a href="#!" className="btn btn-primary "> Issues :{has_issues ? open_issues_count : 'none'} </a>
                    <span> &nbsp; Submitted  &nbsp;
                         <Moment fromNow >
                            {created_at}
                        </Moment>
                      &nbsp; by {name} . </span>
                </p>

                
            </div>
        </div>
    )
}

RepositoryItem.propTypes = {

    repo: PropTypes.object.isRequired,
}

export default RepositoryItem
