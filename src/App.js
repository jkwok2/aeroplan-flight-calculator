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
      <div class="grid-image">
        <p>Accurately check the total points necessary to travel to your dream location. To get started, choose the type of seat class you wish to fly. Then enter any number of airport codes on your flight path, seperated by dash signs ("-").</p>
        </div>

        <div class="grid-image">
          <ResetButton></ResetButton>
          </div>

          <div class="grid-image">
            <ClassDropdown></ClassDropdown>
            </div>

            <div class="grid-image">
    <CostDisplay></CostDisplay>
    </div>

    <div class="grid-image">
      <InputTextField></InputTextField>
      </div>

      <div class="grid-image">
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
