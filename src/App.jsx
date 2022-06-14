import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
