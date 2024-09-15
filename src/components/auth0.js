import {useAuth0} from "@auth0/auth0-react";
function App() {
  const {user, loginWithRedirect, isAuthenticated} = useAuth0();

  console.log("current user",user);

  return (
    <div className="App">
      <header className="App-header">
        {
          isAuthenticated ? (<button>Logout</button>) : ( <button onClick={(e) => loginWithRedirect()
          }>login With Redirect</button>)
        }
      </header>
    </div>
  );
}

export default App;
