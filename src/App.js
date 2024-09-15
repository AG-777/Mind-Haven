// landingpage/App.js

import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <p>Welcome, {user.name}!</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            Login with Redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
