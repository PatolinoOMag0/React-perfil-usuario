import './App.js';
import Cartao from './Components/Cartao.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';


function App() {
  
  return (
    <div className="centralizar">
      <Header /> 
      <Cartao />
      <Footer />
    </div>
  );
}

export default App;