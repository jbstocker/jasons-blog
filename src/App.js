import React, { Component } from 'react'
import Navigation from './components/Navigation'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './Theme';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={Theme}>
                <Router>
                    <div>
                        <Navigation/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}
export default App

