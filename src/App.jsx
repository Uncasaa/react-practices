import './App.css';
import Button from './Button';
// import ButtonListWithFor from './ButtonListWithFor';
import ButtonListWithMap from './ButtonListWithMap';
import Profile from './Profile';
import Profile2 from './Profile2'
import Profile3 from './Profile3'
import Profile4 from './Profile4'


function App() {

//const clickEvent = () => {
  
  //return document.getElementById("root").insertAdjacentHTML("beforeend", "<div>This is a new div</div>");



  return (
    <div className="App">
      {/* <buttonListWithFor />   */}
      <ButtonListWithMap />  
      <Profile />
      <Profile2 />
      <Profile3 />
      <Profile4 />
    </div>
  );
}

export default App;
