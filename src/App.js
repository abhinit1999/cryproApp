import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
     <Routes>

    <Route path='/' element={<Homepage/>} exact></Route>
    <Route path='/coins/:id' element={<Coinpage/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}



export default App;
