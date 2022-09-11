import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Chatforum from './components/chatforum/chatforum';
import Prescription from './components/Prescription/Pres'
// import Av from './components/chatforum/js/web-socket';
import Todo from './components/todo/todo';
import './bootstrap.min.css';
import NavComponent from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact';
import Signout from './components/Signout';
import Loading from './components/Loading';
import Dashboard from './components/Dashboard';

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
			}
			console.log(message);
		});
	}
	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});
		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, []);
	return (
		<>
			<NavComponent />
			<div className="main-container">
				<Routes>
					{!isLogined && (
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
					)}
					{!isLogined && (
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
					)}
					{!isLogined && (
						<Route
							path="/*"
							element={
								<Login
									socket={socket}
									setUser={setUser}
									setIsLogined={setIsLogined}
								/>
							}
						/>
					)}

					{isLogined && (
						<Route
							path="/contact"
							element={<Contact />}
						/>
					)}

					{/* <Route
						path={'/av'}
						element={<Av />}
					/> */}
					{isLogined && (
						<Route
							path={'/*'}
							element={<Chatforum />}
						/>
					)}

					{isLogined && (
						<Route
							path={'/todo'}
							element={
								<Todo
									socket={socket}
									user={user}
								/>
							}
						/>
					)}
          {isLogined && <Route
						path={'/prescription'}
						element={
							<Prescription socket={socket} />
						}
					/>}
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
