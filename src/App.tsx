import "./App.css";
import PageWrapper from "./containers/PageWrapper";
import Home from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import Details from "./pages/Details";
function App() {


  return (
    <PageWrapper>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`/detail/:id`}>
          <Details />
        </Route>
      </Switch>
    </PageWrapper>
  );
}

export default App;
