import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import ShowMessage from './pages/ShowMessage';
import { MessageProvider } from './context/MessageContext';
 
function App() {
  return (
    <MessageProvider>
      <Router>
        <Header />
        <main className='py-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/show-message' element={<ShowMessage />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer />
    </MessageProvider>
  );
}

export default App;
