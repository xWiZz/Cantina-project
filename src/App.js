import './App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

import Recette from './views/Recette';
import Accueil from './views/Accueil';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ul>
            <li><NavLink to ="/" exact>Accueil</NavLink></li>
          </ul>
        </header>

        <Route path="/" component={Accueil} exact />
        <Route path="/recette/:id" component={Recette} />
      </div>
    </BrowserRouter>
  );
}

export default App;
