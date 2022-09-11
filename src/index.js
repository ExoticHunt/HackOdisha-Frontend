import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import App from './App';
import io from 'socket.io-client';
const socket = io('http://localhost:2202');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App socket={socket}/>
	</BrowserRouter>,
);
