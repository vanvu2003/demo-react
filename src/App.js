import logo from './logo.svg';
import './App.css';
import MyComponent from './views/MyComponent';
import MainComponent from './views/Todo/MainComponent';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Chào mừng bạn đã đến với ReactJs
          </p>
          {/* <MyComponent /><br /> */}
          {/* <MainComponent /> */}

        </header>
        <Routes>
          <Route path='/' element={<MyComponent />} />
          <Route path='/todos' element={<MainComponent />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
