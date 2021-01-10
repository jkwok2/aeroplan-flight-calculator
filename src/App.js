import earth from './earth.webp';
import './App.css';
import CostDisplay from './Components/CostDisplay'
import SimpleMap from './Components/Map'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={earth} className="App-logo" alt="earth" />
        <p>
          Welcome to our Flight Reward Calculator !!
        </p>
        
        
      </header>
      <p>Accurately check the total points necessary to travel to your dream location</p>
      <CostDisplay></CostDisplay>
      <SimpleMap></SimpleMap>
    </div>

  );
}

export default App;
