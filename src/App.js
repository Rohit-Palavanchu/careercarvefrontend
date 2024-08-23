import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BookingSuccess from './components/BookingSuccess';
import BookingFail from './components/BookingFail';
import Payment from './components/Payment';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/success" element={<BookingSuccess />}/>
      <Route exact path='/fail' element={<BookingFail/>}/>
      <Route exact path='/payment' element={<Payment/>}/>
    </Routes>
  );
}

export default App;
