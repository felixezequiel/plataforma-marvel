import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../components/home'
import { Login } from '../components/login'
import { PrivateRoute } from '../components/privateRoute'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Login } />
        <PrivateRoute exact path='/home' component={ Home }/>
      </Switch>
    </Router>
  )
}