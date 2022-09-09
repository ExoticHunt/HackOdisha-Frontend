import {Routes,Route} from 'react-router-dom';
import './App.css';
import Chatforum from './components/chatforum/chatforum'
function App() {
  return (
    
    <>
      <Routes>
        <Route path={'/*'} element={<Chatforum />} />
      </Routes>
    </>

  );
}

export default App;
