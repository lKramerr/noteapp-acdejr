import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './router';
import { store } from './store/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Provider store={ store }>

        <BrowserRouter>
        
              
              <AppRouter />
              
        
        </BrowserRouter>

    </Provider>
    
  </React.StrictMode>
);
