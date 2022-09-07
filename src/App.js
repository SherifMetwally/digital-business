import './App.css';
import Header from './components/Header';
import Maindata from './components/Maindata';
import Buttons from './components/Buttons';
import About from './components/About';
import Interest from './components/Interests';
import Socialmedia from './components/Socialmedia';
function App() {
  return (
    <div className='container'>
   <Header/>
   <Maindata />
   <Buttons/>
   <About/>
   <Interest />
   <Socialmedia />
   </div>
  );
}

export default App;
