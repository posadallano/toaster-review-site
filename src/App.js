import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';

const client = new ApolloClient ({
  uri: 'http://localhost/headlesswp-1/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>

        <div>
          <header>
            <h1>Toaster Review Site</h1>
          </header>
          <div className='content'>
            <Route exact path="/" component="Toasters" />
            <Route exact path="/toasters" component="Toasters" />
            <Route exact path="/toasters/:slug" component="Toaster" />
          </div>
        </div>

      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
