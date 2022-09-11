import { useState, useEffect } from 'react';

function ChatForum({ socket }) {
	const room = prompt('Enter your name to join');
	socket.emit('join-room', room);
	const [sentMessage, setSentMessage] = useState([11]);
	const [receivedMessage, setReceivedMessage] = useState([12]);
	function sendMessage() {
		socket.emit('send-message', {
			message: document.getElementById('sentMessage'),
			room: room,
		});
	}
	return (
		<>
			<div className="cotainer">
				{sentMessage.map((item) => (
					<div className="message receive">Simron: Hello</div>
				))}
				{receivedMessage.map((item) => (
					<div className="message sent">Harsh: Hiii</div>
				))}
			</div>
			<form
				action="#"
				id="send-container"
			>
				<input
					type="text"
					name="sentMessage"
					id="sentMessage"
				/>
				<button type="submit">Send</button>
			</form>
		</>
	);
}
export default ChatForum;
