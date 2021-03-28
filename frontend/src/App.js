import React from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import {store,persistor} from './store';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <Router history={history}>
            <Routes/>
            <GlobalStyle/>
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>

      
     </>
    </div>
  );
}

export default App;
