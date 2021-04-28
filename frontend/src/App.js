import './App.css';
import {GlobalStyle} from './components/common';
import {ThemeProvider} from 'styled-components';
import Dashboard from './components/screens/Dashboard';
// import colors from './themes/color';


const theme ={
  
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Dashboard />
      {/* <BrowserRouter>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
