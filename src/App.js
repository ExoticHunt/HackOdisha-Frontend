import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chatforum from './components/chatforum/chatforum';
import Av from './components/chatforum/js/web-socket';
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

function App() {
	return (
		<>
			<NavComponent />
			<div className="main-container">
				<Routes>
					<Route
						exact
						path="/dashboard"
						element={<Dashboard />}
					/>
					<Route
						exact
						path="/sign-in"
						element={<Login />}
					/>
					<Route
						path="/sign-up"
						element={<SignUp />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path={'/av'}
						element={<Av />}
					/>
					<Route
						path={'/*'}
						element={<Chatforum />}
					/>
					<Route
						path={'/todo'}
						element={<Todo />}
					/>
					<Route
						path={'/sign-out'}
						element={<Signout />}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
