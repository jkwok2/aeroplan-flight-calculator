import earth from './earth.webp';
import './App.css';
import CostDisplay from './Components/CostDisplay'
import InputTextField from './Components/InputTextField'
import ResetButton from './Components/ResetButton';
import ClassDropdown from './Components/ClassDropdown';
import DistanceDisplay from './Components/DistanceDisplay';
import Map from './Components/Map';


function App() {

  


  return (
  
    <div className="App">
      <header className="App-header">
        <img src={earth} className="App-logo" alt="earth" />
        <p>
          Welcome to our Flight Reward Calculator !!
        </p>
        
        
      </header>
      
      <div class="grid-table">
        <div>
        <p>Accurately check the total points necessary to travel to your dream location</p>
        </div>

        <div>
          <ResetButton></ResetButton>
          </div>

          <div>
            <ClassDropdown></ClassDropdown>
            </div>

    <div>
    <CostDisplay></CostDisplay>
    </div>

    <div>
      <InputTextField></InputTextField>
      </div>

      <div>
      <DistanceDisplay></DistanceDisplay>
      </div>
      </div>
      

      <div>
      <Map></Map>
      </div>

    </div>

  );
}

export default App;
