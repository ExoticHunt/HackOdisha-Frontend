import React, { useState, useEffect } from 'react';
import CreateTask from '../../modals/CreateTask';
import Card from '../Card/Card';
import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalFooter,
} from 'mdb-react-ui-kit';
// import { axios } from "../../axios";
// import { Reminder } from "../Reminder/Reminder";
import styled from 'styled-components';

function Todo({ socket, user }) {
	const [modal, setModal] = useState(false);
	const [taskList, setTaskList] = useState([]);
	useEffect(() => {
		let arr = localStorage.getItem('taskList');
		if (arr) {
			let obj = JSON.parse(arr);
			setTaskList(obj);
		}
	}, []);

	const deleteTask = (index) => {
		let tempList = taskList;
		tempList.splice(index, 1);
		localStorage.setItem('taskList', JSON.stringify(tempList));
		setTaskList(tempList);
		window.location.reload();
	};

	const updateListArray = (obj, index) => {
		let tempList = taskList;
		tempList[index] = obj;
		localStorage.setItem('taskList', JSON.stringify(tempList));
		setTaskList(tempList);
		window.location.reload();
	};

	const toggle = () => {
		setModal(!modal);
	};

	const saveTask = (taskObj) => {
		let tempList = taskList;
		tempList.push(taskObj);
		localStorage.setItem('taskList', JSON.stringify(tempList));
		setTaskList(taskList);
		setModal(false);
	};

	const [basicModal, setBasicModal] = useState(false);

	const toggleShow = () => setBasicModal(!basicModal);
	const [reminders, setReminders] = useState([]);
	const [formData, setFormData] = useState({});

	// const getReminders = async () => {
	//   const response = await axios.get("/reminders").catch((err) => {
	//     console.log("Error:", err);
	//   });
	//   if (response && response.data) {
	//     setReminders(response.data);
	//   }
	// };
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	// const addReminder = async (event) => {
	//   event.preventDefault();
	//   console.log(formData);
	//   const response = await axios.post("/reminders", formData).catch((err) => {
	//     console.log("Error: ", err);
	//   });

	// if (response) await getReminders();

	//   setFormData({});
	// };

	// const deleteReminder = async (id) => {
	//   const response = await axios.delete(`/reminders/${id}`).catch((err) => {
	//     console.log("Error deleting: ", err);
	//   });

	//   if (response) await getReminders();
	// };

	// //OnComponentDidMount lifecycle
	// useEffect(() => {
	//   getReminders();
	// }, []);
	const handleReminder = async () => {
		const info = {
			user: localStorage.getItem('user'),
			message: document.getElementById('message').value,
			date: document.getElementById('date').value,
			time: document.getElementById('time').value,
		};
		console.log(info);
		socket.emit('remainder', info);
		await socket.on('remainder', ({ res, message, remainder }) => {
			if (res) {
				console.log(remainder);
			}
			console.log(message);
		});
	};
	return (
		<TodoList>
			{/* <TodoMain>

      <div className="popup">
        <div className="First"><input placeholder="Enter task" type="text" /></div>
        <div className="Last">
          <button className="popup-button" onClick={toggleShow}>Add Reminder</button>
          <button className="popup-button" >Add Reminder</button>
          <button className="popup-button" >Add to list</button>
        </div>

      </div>*/}
			{/*<div className="popup">
        <div className="btn1">
          <button className="popup-button" >Add Reminder</button>
        </div>
        <div className="btn2"><button className="popup-button" onClick = {() => setModal(true)} >Create Task</button></div>

    </div>*/}
			<div className="popup">
				<div>
					<button
						className=" mt-2 popup-button "
						onClick={() => setModal(true)}
					>
						Create Task
					</button>
				</div>
				<div>
					<button
						className="mt-2 popup-button "
						onClick={toggleShow}
					>
						Reminder
					</button>
				</div>
			</div>

			<div className="task-container">
				{taskList &&
					taskList.map((obj, index) => (
						<Card
							taskObj={obj}
							index={index}
							deleteTask={deleteTask}
							updateListArray={updateListArray}
						/>
					))}
			</div>
			<CreateTask
				toggle={toggle}
				modal={modal}
				save={saveTask}
			/>
			<MDBModal
				show={basicModal}
				setShow={setBasicModal}
				tabIndex="-1"
			>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Add Reminder</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<Remind>
							<form>
								<label htmlFor="reminder">Reminder</label>
								<input
									id={'message'}
									name="reminder"
									placeholder="Reminder"
									onChange={handleChange}
								/>
								<label htmlFor="Date">Date</label>
								<input
									id={'date'}
									name="date"
									placeholder="Date"
									onChange={handleChange}
									type={'date'}
								/>
								<label htmlFor="time">Time</label>
								<input
									id={'time'}
									name="time"
									type="time"
									onChange={handleChange}
								/>
							</form>
						</Remind>
						<MDBModalFooter>
							<MDBBtn
								color="secondary"
								onClick={toggleShow}
							>
								Close
							</MDBBtn>
							<MDBBtn
								type="submit"
								onClick={handleReminder}
							>
								Save
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
			{/*
      <TodoBody>
    <h3>Reminders</h3>
      {!noReminder &&
        reminders.map((reminder, idx) => (
          <Reminder key={idx} {...reminder} onDelete={deleteReminder} />
        ))}
      <br />
      </TodoBody>
    
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Reminder</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <Remind>
              <form onSubmit={addReminder}>
                <label htmlFor="id">Number</label>
                <input name="id" placeholder="Example: 1,2 .. " onChange={handleChange} />
                <label htmlFor="reminder">Reminder</label>
                <input name="reminder" placeholder="Reminder" onChange={handleChange} />
                <label htmlFor="time">Time</label>
                <input name="time" placeholder="Time" onChange={handleChange} />
              </form>
            </Remind>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn type="submit">Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
        </MDBModal>
    </TodoMain>*/}
		</TodoList>
	);
}
const TodoList = styled.div`
	width: 100vw;
	height: auto;
	overflow-x: hidden;

	.card-container {
		height: 300px;
		width: 300px;
		box-shadow: 0px 3px 50px #a5a5a5;
	}

	.card-wrapper {
		width: auto;
		min-width: 200px;

		height: 200px;
		margin: 20px;
		box-shadow: 0px 3px 50px #a5a5a5;
		display: flex;
		flex-direction: column;
	}

	.card-top {
		width: 100%;
		height: 2%;
	}

	.task-holder {
		width: 100%;
		height: 98%;
		padding: 10px 10px;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.card-header {
		margin-top: 10px;
		margin-bottom: 10px;
		max-width: 80px;
		height: 30px;
		padding: 1px 1px !important;
		text-align: center;
	}

	.task-container {
		height: 600px;
		width: 100%;
		margin: 5px;
		display: flex;
		flex-wrap: wrap;
		background-color: #f6f7f8;
		padding: 40px 100px;
	}
	.popup {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 94vw;
		margin-left: 2vw;
		/* align-content: center; */
		justify-content: flex-end;
		background-color: #fff;
		border-radius: 6px;
		padding: 10px;
		box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.2);
		text-align: center;
	}
	.popup-button {
		height: max-content;
		width: max-content;
		text-align: center;
		text-decoration: none;
		margin: 10px;
		border: none;
		font-weight: 600;
		font-size: 10px;
		text-transform: uppercase;
		color: #fff;
		border-radius: 6px;
		padding: 10px 30px;
		background-size: 200% auto;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
			0 1px 3px rgba(0, 0, 0, 0.08);
		background-image: linear-gradient(
			to right,
			#895cf2 0%,
			#ffabf4 50%,
			#895cf2 100%
		);
		transition: 0.5s;
		&:hover {
			background-position: right center;
		}
	}
`;
/*
const TodoMain = styled.div`
display:flex;
 height:auto;
 width: 100vw;
justify-content: center;
 .popup {
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 90vw;
    align-content: center; 
   justify-content: flex-end;
   background-color: #fff;
   border-radius: 6px;
   padding: 10px;
   box-shadow: 0 10px 40px -14px rgba(0,0,0,0.30);
   text-align: center;
 }
 .popup-button{
   width: auto;
   text-align: center;
     text-decoration: none;
     margin:10px;
     border: none;
     font-weight: 600;
     font-size: 10px;
     text-transform: uppercase;
     color: #fff;
     border-radius: 6px;
     padding: 10px 30px;
     background-size: 200% auto;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
     background-image: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
     transition: 0.5s;
     &:hover {
       background-position: right center;
     }  }

`*/

// const TodoMain = styled.div`
// display: flex;
// align-content: center;
// justify-content: center;
// flex-direction: column;
// height:auto;
// width: 100vw;

// .popup {
//   display: flex;
//   width: 90vw;
//   /* align-content: center; */
//   justify-content: flex-end;
//   background-color: #fff;
//   border-radius: 6px;
//   padding: 10px;
//   box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);
//   text-align: center;

// .First{
//   display:flex;
//   width: auto;
// justify-content: flex-start;
// align-items: center;

// input{
//   width: 60vw;
//   height: auto;
//   border: 3px solid #FFDE00;
//   border-radius:20px;
//   padding: 0 0 0 5px;
//   margin-right: 30%;
// }
// input:focus{
//   border: 1px solid #1670BE;
//     box-shadow: 0 0 3px #1670BE;
//     outline-offset: 0px;
//     outline: none;
// }
// }
// .popup-button{
//   width: auto;
//   text-align: center;
//     text-decoration: none;
//     margin:10px;
//     border: none;
//     font-weight: 600;
//     font-size: 10px;
//     text-transform: uppercase;
//     color: #fff;
//     border-radius: 6px;
//     padding: 10px 30px;
//     background-size: 200% auto;
//     box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
//     background-image: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
//     transition: 0.5s;
//     &:hover {
//       background-position: right center;
//     }
//   }
// }
// `

const Remind = styled.div`
	form {
		display: grid;
		grid-template-rows: auto auto auto;
		height: auto;
		width: auto;
	}
	display: grid;
	height: auto;
	border: none;
	padding: 18px;
`;
const TodoBody = styled.div`
	height: 70vh;
	width: 90vw;
`;

export default Todo;
