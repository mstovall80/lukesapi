import './App.css';
import Search from './components/Search';
import Details from './components/Details';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Router>
        <Details path = "/:category/:id/"></Details>
      </Router>
    </div>
  );
}

export default App;
