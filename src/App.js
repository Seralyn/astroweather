
import './App.css';
import SplashBody from './components/SplashBody';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-slate-800 h-screen flex flex-col items-center">
      <Header className="flex justify-self-center" />
      <SplashBody />
    </div>
  );
}

export default App;
