import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import Footer from './components/Footer/Footer';
import { GlobalProvider } from './context/GlobalState';
import Characters from './components/Characters/Characters';

function App() {
  return (
    <div className='App2'>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<UserForm />} />
            <Route path='/characters' element={<Characters />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
