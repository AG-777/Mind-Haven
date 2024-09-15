// landingpage/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'; // Ensure this path is correct based on your folder structure

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-xjgy47o2gt52bize.us.auth0.com"
    clientId="LPJGWtqCoemcMbDxBG6ltojDlhA29YAk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
