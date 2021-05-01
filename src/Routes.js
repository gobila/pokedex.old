import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import Home from './Pages/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )

}