import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chatforum from './components/chatforum/chatforum';
import Av from './components/chatforum/js/web-socket';
function App() {
	return (
		<>
			<Routes>
				<Route
					path={'/av'}
					element={<Av />}
				/>
				<Route
					path={'/*'}
					element={<Chatforum />}
				/>
			</Routes>
		</>
	);
}

export default App;
