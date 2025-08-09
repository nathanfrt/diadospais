import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header';
import Homage from './components/Homage';
import Slider from './components/Slider';
import Gift from './components/Gift';
import Web from './components/WebBackground';
import Randon from './components/Game';

function App() {
  return (
    <>
      <Web />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Homage />
        <Slider />
        <Gift />
        <Randon />
      </div>
    </>
  );
}

export default App;
