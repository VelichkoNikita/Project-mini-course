import {AppWrapper, Global} from "./CSS/CSS";
import Header from "./Components/Header";
import {Route, Switch, Redirect} from "react-router-dom"
import {createBrowserHistory} from 'history'
import StartPage from "./Pages/StartPage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

const history = createBrowserHistory()

function App() {
    return (
        <>
            <Global/>
            <AppWrapper>
                <Header/>
                <Switch>
                    <Route history={history} path="/StartPage" component={StartPage}/>
                    <Route history={history} path="/Page1" component={Page1}/>
                    <Route history={history} path="/Page2" component={Page2}/>
                    <Route history={history} path="/Page3" component={Page3}/>
                    <Redirect from='/' to='/StartPage'/>
                </Switch>
            </AppWrapper>
        </>
    );
}

export default App;
