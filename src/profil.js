import React from 'react'
import './profile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";






const Profil = ({ user,github }) => (
    <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 cover">
                    <div className="media align-items-end profile-head">
                        <div className="profile mr-3"><img
                            src={user.avatar_url}
                            alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href={user.html_url}
                                                                                            className="btn btn-outline-dark btn-sm btn-block">Edit
                            profile</a></div>

                        <div className="media-body mb-5 text-white">
                            <h4 className="mt-0 mb-0">{user.name}</h4>
                            <p className="small mb-4"><FontAwesomeIcon icon={faLocationArrow} />   {user.location}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-4 d-flex justify-content-end text-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">{user.public_repos}</h5><small className="text-muted"> <i
                            className="fas fa-image mr-1"></i>Public Repos</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">{user.followers}</h5><small className="text-muted"> <i
                            className="fas fa-user mr-1"><FontAwesomeIcon icon={faUser} />
                        </i>Followers</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">{user.following}</h5><small className="text-muted">
                            <FontAwesomeIcon icon={faUser} /> Following</small>
                        </li>
                    </ul>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">About</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">{user.bio}</p>
                        <p className="font-italic mb-0"> <FontAwesomeIcon icon={faLink} /><a href={user.blog} target="_blank">{user.blog}</a></p>
                    </div>
                </div>
                <div className="py-4 px-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">les répertoires </h5>
                    </div>
                    <div className="row">
                        {github.map(item => (
                            <a href={item.clone_url} target="_blank" className="col-lg-12 mb-2 pr-lg-1 repos">
                            <div className="col-lg-12 mb-2 pr-lg-1 repos" >
                                <h5>{item.name}</h5>
                                <h5>{item.description}</h5>
                                <h5><FontAwesomeIcon icon={faCode} /> {item.language} <FontAwesomeIcon icon={faStar} /> {item.stargazers_count} <FontAwesomeIcon icon={faCodeBranch} /> {item.forks}</h5>

                            </div>
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Profil
