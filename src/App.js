import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton'
import LogOutButton from './components/LogOutButton'
import Profile from './components/Profile'


function App() {
  return (
    <main className="column">
      <h1>Auth0 Login</h1>
     <LoginButton />
     <LogOutButton />
     <Profile />
    </main>
  );
}

export default App;
