import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NewsForm from './components/NewsForm/NewsForm';
import Footer from './components/Footer/Footer';
import { GlobalProvider } from './context/GlobalState';

import News from './components/News/News';

function App() {
  return (
    <div className='App2'>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sendnews' element={<NewsForm />} />
            <Route path='/news' element={<News />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
