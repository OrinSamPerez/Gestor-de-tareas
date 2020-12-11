import AgregarTarea from './Component/AgregarTarea.jsx';
import Login from './Component/Login.jsx';
import Registro from './Component/Registro.jsx';
import Error from './Component/Error.jsx';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Registro}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/home/:uid" exact component={AgregarTarea }></Route>
          <Route  component={Error }></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
 