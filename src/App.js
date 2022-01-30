import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import PriceCardComp from './components/PriceCardComp';
import CreateTask from './components/CreateTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import EditTask from './components/EditTask';

export const TaskContext = React.createContext("");
const url="https://61f5308362f1e300173c403a.mockapi.io/tasks/";

function App() {
  let [tasks, setTasks] = useState([])

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

  return (
    <BrowserRouter>
      <TaskContext.Provider value = {{tasks, setTasks}}>
        <div style={{ display: "grid", gridTemplateColumns: "17.5% 82.5%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/createTask" element={<CreateTask/>} />
              <Route path="/todo" element={<Todo/>} />
              <Route path="/editTask/:id" element={<EditTask/>} />
              <Route path="/pricecard" element={<PriceCardComp />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </TaskContext.Provider>
    </BrowserRouter>
  )
}

export default App;
