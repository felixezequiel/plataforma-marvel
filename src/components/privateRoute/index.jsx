import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { Auth } from "../../provider/auth"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authorization] = useContext(Auth)
  
  return (
    <Route exact { ...rest }>
      {authorization ? <Component /> : <Redirect to='/' />}
    </Route>
  )
}