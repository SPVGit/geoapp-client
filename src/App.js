

import { Route, Routes } from "react-router-dom"
import ScreenCapture from "./components/ScreenCapture";

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/geometricpainting' element = { <ScreenCapture/>}/>

      </Routes>


    </div>
  );
}

export default App;