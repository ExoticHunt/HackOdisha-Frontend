import React, {useEffect, useState} from 'react';
import CreateTask from '../../modals/PresCreate'
import Card from '../Prescription/PresCard';
import styled from 'styled-components'

const TodoList = ({ socket }) => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <Prescribe>
            <div className = "header text-center">
                <h3>Medicine List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Enter Prescription</button>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </Prescribe>
    );
};
const Prescribe=styled.div`
display: grid;
align-items: top;
min-height: calc(100vh - 56px);
.header{
  height: max-content;
  width: 100%;
  background-color : #E9EEF6;
  padding: 25px 0;
}

.card-wrapper{
  width: max-content; 
  padding: 10px;
  height: max-content; 
  box-shadow: 0px 3px 50px #A5A5A5;
  display: flex;
  flex-direction: column;
}

.card-top{
  width: 100%;
  height: 2px;
}

.task-holder{
  width: 100%;
  height: 98%;
  padding: 10px 10px;
  display : flex;
  flex-direction: column;
  position: relative;
}

.card-header{
  margin-top: 15px;
  margin-bottom: 10px;
  max-width: 80px;
  height: 30px;
  padding: 4px 10px !important;
  text-align: center;
}

.task-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #F6F7F8;
  padding : 40px 100px;
  justify-content: space-around;
}
`
export default TodoList;