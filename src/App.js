import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container mx-auto">
      <UserList />
      <UserDetail />
    </div>
  );
}

export default App;
