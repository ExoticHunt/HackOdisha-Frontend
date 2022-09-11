import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Chatforum from './components/chatforum/chatforum';
// import Av from './components/chatforum/js/web-socket';
import Todo from './components/todo/todo';
import './bootstrap.min.css';
import NavComponent from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact';

function App({ socket }) {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [isLogined, setIsLogined] = useState(false);
	const [user, setUser] = useState(null);
	if (isConnected) {
		socket.emit('verifyToken', {
			token: localStorage.getItem('token'),
		});
		socket.on('verifyToken', ({ res, user, message }) => {
			if (res) {
				setIsLogined(true);
				setUser(user);
			} else {
				console.log(message);
			}
		});
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
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('pong');
		};
	}, []);
	return (
		<>
			<NavComponent />
			<div className="main-container">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Login
								socket={socket}
								setUser={setUser}
								setIsLogined={setIsLogined}
							/>
						}
					/>
					<Route
						exact
						path="/sign-in"
						element={
							<Login
								socket={socket}
								setUser={setUser}
								setIsLogined={setIsLogined}
							/>
						}
					/>
					<Route
						path="/sign-up"
						element={
							<SignUp
								socket={socket}
								setUser={setUser}
								setIsLogined={setIsLogined}
							/>
						}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					{/* <Route
						path={'/av'}
						element={<Av />}
					/> */}
					<Route
						path={'/*'}
						element={<Chatforum />}
					/>
					<Route
						path={'/todo'}
						element={
							<Todo
								socket={socket}
								user={user}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
