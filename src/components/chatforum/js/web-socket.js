import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://localhost:5000');
const user = 'Simcard';


function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [lastPong, setLastPong] = useState([]);
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const sendMessage = async() => {
		if (currentMessage !== "") {
			const Message = {
				sender: '',
				message: '',
				timeStamp: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
			}
		}
	}
	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.on('pong', (message) => {
			console.log(`ping : ${new Date().toISOString()}`);
			setLastPong(message);
			setMessageList((list) => [...list, message])
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('pong');
		};
	}, []);

	const sendPing = () => {
		console.log(`ping : ${new Date().toISOString()}`);
		socket.emit('ping', {
			message: document.getElementById('msg').value,
		});
	};

	<>
live
		<div className="chat-body">
			{messageList.map((messageContent) => {
				return (<div className="message" >
				{user === messageContent.sender && <SentMessage>
					<div>
						<div className="message-content">
							<p>{messageContent.message}</p>
						</div>
						<div className="message-meta">
							<p>{messageContent.timeStamp}</p>
						</div>
			</div>
					</SentMessage>}
				{user !== messageContent.sender && <RecieveMessage><div>
					<div className="message-content">
						<p>{messageContent.message}</p>
					</div>
					<div className="message-meta">
						<p>{messageContent.timeStamp}</p>
					</div>
		</div></RecieveMessage>}
					{/*<div>
						<div className="message-content">
							<p>{messageContent.message}</p>
						</div>
						<div className="message-meta">
							<p>{messageContent.timeStamp}</p>
						</div>
			</div>*/}
				</div>
				)
			})}

			<input
			type="text"
			placeholder="Enter your message"
			id="sentMessage"
			onChange={(event) => { setCurrentMessage(event.target.value) }}
		/>
		<button type="submit" onClick={sendMessage}>&#9658;</button>
		</div>
		

	</>
}

const SentMessage = styled.div`
    display: grid;
	height: 50vh;
    border: 1px solid #000;
	z-index: 1000;
    padding: 2px;
    background: green;
`
const RecieveMessage = styled.div`
    display: grid;
	height:50vh;
    border: 1px solid #000;
    padding: 2px;
    background: red;
`

export default App;