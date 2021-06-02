import React from 'react';
import './App.css';
import {GlobalStyle} from './components/common';
import {ThemeProvider} from 'styled-components';
import {Dashboard} from './components/screens/Dashboard';
import {Browse} from './components/screens/Browse';
import {Profile} from './components/screens/Profile';
import {Program} from './components/screens/Program';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Theme from './components/themes/color';

const client = new ApolloClient({
  uri: "https://2ihzsys3.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {/* <Dashboard /> */}        
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/browse" component={Browse} />
            <Route path="/profile" component={Profile} />            
          </Switch>      
          <Route path="/program" component={Program} />      
          <Route path='/BackLink' component={Browse} />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
