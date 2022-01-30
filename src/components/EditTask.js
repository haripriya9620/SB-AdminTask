import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import profile from '../img/profile.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const url="https://61f5308362f1e300173c403a.mockapi.io/tasks/";

function EditTask(props) {
    let params = useParams();
    let navigate = useNavigate();
    let [taskName, setTaskName] = useState("")
    let [taskDescription, setTaskDescription] = useState("");
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");
    let [status, setStatus] = useState("");

    let getData = async()=>{
        await fetch(url+params.id)
        .then(response => response.json())
        .then(res=>{
          setTaskName(res.taskName);
          setTaskDescription(res.taskDescription);
          setStartDate(res.startDate);
          setEndDate(res.endDate);
          setStatus(res.setStatus);
        })
        .catch(err=>{
          console.log(err)
        })
      }

    useEffect(()=>{
       getData();
    },[])  
      
    let handleSubmit = async()=>{
        await fetch(url+params.id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                taskName,
                taskDescription,
                startDate,
                endDate,
                status
            })
        })
        .then(response=>response.json())
        .then(res=>{
            navigate("/todo")
        })
        .catch(err=>{
            console.log(err)
        })

        navigate("/todo");
    }
    return (
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
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-left justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit Task</h1>
                    </div>
                    <div className="row" >
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" value={taskName} placeholder="Enter Task name" onChange={(e) => setTaskName(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" value={taskDescription} placeholder="Enter Task Description" onChange={(e) => setTaskDescription(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" value={startDate} placeholder="Enter start date in (dd/mm/yyyy)" onChange={(e) => setStartDate(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" value={endDate} placeholder="Enter End date in (dd/mm/yyyy)" onChange={(e) => setEndDate(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Select size="lg" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option>Select status</option>
                                        <option value="inprogress">Inprogress</option>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <Row>
                                <Col>
                                    <Button variant="primary" className="mb-3" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTask
