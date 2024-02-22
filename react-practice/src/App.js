import './App.css';
import Count from './component/Count';
import Love from './component/Love';
import LovePromises from './component/LovePromises';
import MyLoveContainer from './component/MyLoveContainer';

function App() {
  return (
    <div className="App">
      <Love />
      <Count />
      <LovePromises/>
      <MyLoveContainer />
      
      
 
    </div>
  );
}

export default App;
