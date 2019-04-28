import React from 'react';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Users from './User'
import Contact from './Contact'

class RouterDefinition extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path = "/" component={Home}/>
                    <Route path = "/users" component={Users}/>
                    <Route path = "/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default RouterDefinition;