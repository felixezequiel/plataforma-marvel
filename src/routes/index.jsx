import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from '../components/login'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  )
}