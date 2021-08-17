import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  HomeRoute,
  BlogRoute
} from '@routes'
import Home from '@routes/Home'
import Blog from '@routes/Blog'
import Header from '@layouts/Header'

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path={BlogRoute}
              component={Blog} />
            <Route path={HomeRoute}
              component={Home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
