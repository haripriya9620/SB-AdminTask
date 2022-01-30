import React from 'react';
import '../App.css';

function PriceCard(props) {
    console.log(props.data)
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.product}</h5>
                    <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={props.data.usersFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.usersFlag?"fas fa-check":"fas fa-times"}></i></span><span className={props.data.usersHighlight?"highlight":""}>{props.data.users}</span></li>
                        <li className={props.data.storageFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.storageFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
                        <li className={props.data.publicProjectsFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.publicProjectsFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProjects}</li>
                        <li className={props.data.accessFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.accessFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.access}</li>
                        <li className={props.data.privateProjectsFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjectsFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProjects}</li>
                        <li className={props.data.supportFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.supportFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.support}</li>
                        <li className={props.data.subdomainFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.subdomainFlag?"fas fa-check":"fas fa-times"}></i></span><span className={props.data.subdomainHighlight?"highlight":""}>{props.data.subdomain}</span></li>
                        <li className={props.data.reportsFlag?"":"text-muted"}><span className="fa-li"><i className={props.data.reportsFlag?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PriceCard
