import React, { Component } from 'react'
import Navigation from './components/Navigation'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Navigation />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default App