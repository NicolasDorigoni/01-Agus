//librerias
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Componentes
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';

//Styles
// import './css/bootstrap.min.css'
import './css/header.css';
import './css/footer.css';
import './css/app.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          
        </Switch>
        <Footer />
      </Router>


    </>
  );
}

export default App;
