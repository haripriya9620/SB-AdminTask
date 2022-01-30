import React, { useState } from 'react'
import profile from '../img/profile.svg';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const url="https://61f5308362f1e300173c403a.mockapi.io/tasks/";

function Todo(props) {

  let [tasks,setTasks]=useState([]);

  let navigate = useNavigate();
  const addTask = () =>{
    let path = `/createTask`;
    navigate(path);
  }

  useEffect(()=>{
    getData();
  },[])

  let getData = async()=>{
    await fetch(url)
    .then(response => response.json())
    .then(res=>{
      setTasks(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  // // using axios
  // let getData = async()=>{
  //   try {
  //     let response = await axios.get(url)
  //     setTasks(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  let handleDelete = async(i)=>{
    await fetch(url+i,{
      method:'DELETE'
    })
    .then(response=>response.json())
    .then(data=>{
      getData()
    })
  }

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="index.html" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Haripriya Sidda</span>
                <img className="img-profile rounded-circle" src={profile} alt="Profile" />
              </a>
              </li>
          </ul>
        </nav>
        <div className="topbar-divider d-none d-sm-block"></div>
        <div className="container-fluid">
          <div className="d-sm-flex align-items-left justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Tasks</h1>
          </div>
          <div className="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <Button variant="outline-primary" onClick={addTask}>Add Task</Button>
            </div>
          </div>
          <div className="row">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map((e, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.taskName}</td>
                      <td>{e.taskDescription}</td>
                      <td>{e.startDate}</td>
                      <td>{e.endDate}</td>
                      <td>{e.status}</td>
                      <td>
                        <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                        <span>&nbsp; &nbsp;</span>
                        <Link to={`/editTask/${e.id}`}>
                          <Button variant='primary'>Edit</Button>
                        </Link>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Todo
