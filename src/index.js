import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';
import './firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


