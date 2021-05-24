import './App.css';
import {TopNav} from './components/navigation/nav';
import {MainComponent} from './pages/main';

function App() {
  return (
    <div className="App">
      <TopNav />
      <MainComponent />
    </div>
  );
}

export default App;
