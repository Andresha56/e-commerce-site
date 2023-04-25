import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vkmf05wdhv7862ep.us.auth0.com"
      clientId="il2xDFlrMiZdE8t6o6HRiDR6233QlW7w"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />

    </Auth0Provider>

  </React.StrictMode>
);

