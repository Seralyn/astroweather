
import './App.css';
import SplashBody from './components/SplashBody';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherInfoBlock from './components/WeatherInfoBlock';

function App() {
  return (
    <div className="bg-grey-800 h-screen flex flex-col items-center">
      <Header className="flex justify-self-center" />
      <SplashBody />
        
      
      <Footer />
    </div>
  );
}

export default App;
