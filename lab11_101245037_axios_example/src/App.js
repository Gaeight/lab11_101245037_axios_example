import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header style={{fontSize:'40px', border:'5px solid white', backgroundColor:'green'}}>User List</header>
      <PersonList />
    </div>
  );
}

export default App;
