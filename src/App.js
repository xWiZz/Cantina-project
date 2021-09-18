import './App.css';
import './components/Card.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

import Recette from './views/Recette';
import Accueil from './views/Accueil';
import nouvelleRecette from './views/NouvelleRecette';
import ModifRecette from './views/ModifRecette';
import Logo from './assets/Cantina-logo.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ul>
            <li> <img src={Logo} alt="" /></li>
            <li><NavLink to ="/" exact>Liste des recettes</NavLink></li>
            <li id="addNavButton"><NavLink to ="/NouvelleRecette/" >Ajouter</NavLink></li>
          </ul>
        </header>

        <Route path="/" component={Accueil} exact />
        <Route path="/recette/:id" component={Recette} />
        <Route path="/NouvelleRecette/" component={nouvelleRecette} />
        <Route path="/edit/:id" component={ModifRecette} />
      </div>
    </BrowserRouter>
  );
}

export default App;
