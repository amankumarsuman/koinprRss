import logo from './logo.svg';
import './App.css';
import HandpickedHeader from './components/header/HandpickedHeader';
import Desktop from './components/desktop/Desktop';
import { Route, Routes } from 'react-router-dom';
import NewsPopup from './components/desktop/NewsPopup';

function App() {
  return (
    < >
        <HandpickedHeader/>

        <Routes>
          <Route  path="/" exact element={
        <Desktop/>

          } />
          <Route  path="/news"  exact element={
        <NewsPopup/>

          } />
        </Routes>
          {/* <NewsPopup/> */}
    
    </>
  );
}

export default App;
