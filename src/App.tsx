import * as React from 'react';
import {
    // BrowserRouter as Router,
    // HashRouter will insert a # into the url route, allowing bookmarks and manual typing,
    // ...but, this might be incomptible with our hash handling - an isomorphic design would be better,
    //    see this stack o/f for a good starting point: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HelloWorld from './HelloWorld';
import ByeBye from './ByeBye';
import Home from './Home';


// to experiment with routing we want to change the component that we display depending upon the routing.

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hello">Hello</Link>
                    </li>
                    <li>
                        <Link to="/bye">Bye</Link>
                    </li>
                </ul>
            </nav>
                Experiment!
                 
            { /*
                without using <Switch> need to use exact path, to prevent multiple sections being rendered **
                <Route exact path="/"  component = {Home}/>
                <Route path="/hello" component = {HelloWorld}/>
                <Route path="/bye" component = {ByeBye}/>
            */ }
                
            <Switch>
                    Switch
                {/* Switch renders the FIRST match that it finds. */}
                <Route path="/hello" component={HelloWorld} />
                <Route path="/bye" component={ByeBye} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}
export default App;
