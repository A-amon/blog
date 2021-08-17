import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeRoute } from '@routes'
import Home from '@routes/Home'
import Header from '@layouts/Header'

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path={HomeRoute}
              component={Home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
