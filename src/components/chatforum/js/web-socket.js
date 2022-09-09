import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://localhost:5000');

const Message = {
    sender: '',
    message: '',
    timeStamp: new Date()
}

function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [lastPong, setLastPong] = useState([]);

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

	return (
		<div>
			<p>Connected: {'' + isConnected}</p>
			<p>Last pong: {lastPong || '-'}</p>
			<p>
				<input
					type="text"
					id="msg"
				></input>
			</p>
			<button onClick={sendPing}>Send ping</button>
		</div>
	);
}

const SentMessage = styled.div`
    display: grid;
    border: 1px solid #000;
    padding: 2px;
    background: green;
`
const RecieveMessage = styled.div`
    display: grid;
    border: 1px solid #000;
    padding: 2px;
    background: red;
`

export default App;