import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
