import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { GlobalStyle } from './global-style';
import { RootStoreContext } from './context/root-store-context';
import RootStore from './store/root-store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootStoreContext.Provider value={new RootStore()}>
      <GlobalStyle />
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>
);
