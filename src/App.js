import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-sm">
        <Router>
          {routes.map((route, idx) => (
            <Route
              key={String(idx)}
              path={route.path}
              exact={route.exact}
              component={(props) => <route.component {...props} />}
            />
          ))}
        </Router>
      </div>
    </div>
  )
}

export default App
