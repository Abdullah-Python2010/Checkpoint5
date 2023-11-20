// Importing all neccessary modules here

// eslint-disable-next-line
import './App.css';
import { Products } from './components/productslist'
// eslint-disable-next-line
import { welcomeUser } from './components/welcome'

function App() {
  return (
    <div className="App">
      
      {welcomeUser()}
      <Products/>

    </div>
  );
}

export default App;
