import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import Home from './Pages/Home';
import UserDex from'./Pages/UserDex';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/UserDex" component={UserDex}/>
            </Switch>
        </BrowserRouter>
    )

}