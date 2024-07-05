import './App.css';
import Home from './Components/Home';
import Airports from './Pages/Airports';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airport from './Pages/Airport';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter className="h-full">
      <Home>
        <Routes>
          <Route path="/airports" element={<Airports />} />
          <Route path="/airports/:id" element={<Airport/>}/>
        </Routes>
      </Home>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
