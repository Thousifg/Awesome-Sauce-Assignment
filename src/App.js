import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import PaymentDone from './Components/PayComplete';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='payment' element={<PaymentDone />}></Route>
      </Routes>
    </div>
  );
}

export default App;
