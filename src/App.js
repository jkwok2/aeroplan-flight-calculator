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
          Welcome to our Flight Rewards Calculator !!
        </p>
      </header>
      
      <div class="grid-table">
        <div>
        <p>Accurately check the total points necessary to travel to your dream location</p>
        </div>

        <div class="grid-table">
          <ResetButton></ResetButton>
          </div>

          <div class="grid-adjusted">
            <ClassDropdown></ClassDropdown>
            </div>

            <div class="grid-adjusted">
            <CostDisplay></CostDisplay>
            </div>

             <div class="grid-adjusted">
              <InputTextField></InputTextField>
              </div>

              <div class="grid-adjusted">
            <DistanceDisplay></DistanceDisplay>
              </div>
                </div>
      
                <div class ="grid-map">
                  <Map></Map>
                </div>

          

    </div>

  );
}

export default App;
