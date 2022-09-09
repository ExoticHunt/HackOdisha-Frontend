import { useState } from 'react';

function ChatForum() {
	const [sentMessage, setSentMessage] = useState([11]);
	const [receivedMessage, setReceivedMessage] = useState([12]);
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
