import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountrierList from './components/CountrierList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Link } from 'react-router-dom';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={CountrierList} />
        <Route exact path="/" component={CountryDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
