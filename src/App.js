import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import PageRoute from './routes/PageRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        <PageRoute />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
