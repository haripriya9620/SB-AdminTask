import React from 'react'
import {Link} from  'react-router-dom';

function SideBar() {
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-id-badge"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Haripriya's Learning</div>
            </a>

            <hr className="sidebar-divider my-0" />


            <Link to="dashboard">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
            </Link>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Planning
            </div>

            <Link to="todo">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-list-alt"></i>
                        <span>Tasks</span></a>
                </li>
            </Link>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                My Projects
            </div>

            <Link to="pricecard">
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-tags"></i>
                        <span>PriceCard</span></a>
                </li>
            </Link>

            {/* <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Hackathon
            </div>

            <Link to="gmail">
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-envelope"></i>
                        <span>GMail</span></a>
                </li>
            </Link> */}

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </>
}

export default SideBar
