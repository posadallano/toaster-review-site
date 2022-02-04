import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Toasters from './Toasters/Toasters';
/* import Toaster from './Toasters/Toaster'; */

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
            <Routes>
              <Route exact path="/" element={< Toasters />}></Route>
              {/* <Route exact path="/toasters" component="Toasters" />
              <Route exact path="/toasters/:slug" component="Toaster" /> */}
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
