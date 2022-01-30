import React from 'react'
import Button from 'react-bootstrap/Button';
import profile from '../img/profile.svg';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../App';
const url="https://61f5308362f1e300173c403a.mockapi.io/tasks/";
function CreateTask(props) {
    let context = useContext(TaskContext);
    let navigate = useNavigate();
    let [taskName, setTaskName] = useState("")
    let [taskDescription, setTaskDescription] = useState("");
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");
    let [status, setStatus] = useState("");

    // let handleSubmit = () => {
    //     let newData = { taskName, taskDescription, startDate, endDate, status };
    //     let newArray = [...context.tasks];
    //     newArray.push(newData);
    //     context.setTasks(newArray);
    //     navigate("/todo");
    // }
    let handleSubmit = async()=>{
        await fetch(url,{
            method:'POST',
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
                        <h1 className="h3 mb-0 text-gray-800">Add Task</h1>
                    </div>
                    <div className="row">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Task name" onChange={(e) => setTaskName(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Task Description" onChange={(e) => setTaskDescription(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter start date in (dd/mm/yyyy)" onChange={(e) => setStartDate(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter End date in (dd/mm/yyyy)" onChange={(e) => setEndDate(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Select size="lg" onChange={(e) => setStatus(e.target.value)}>
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

export default CreateTask
