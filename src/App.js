import user from './images/image-avatar.png';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar cartAmount={3} userPic={user} />
      </header>
    </div>
  );
}

export default App;
