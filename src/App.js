import { useState } from 'react';
import './styles/App.css';
import TopArea from './components/TopArea';
import BodyArea from './components/BodyArea';
import BottomArea from './components/BottomArea'

function App() {
  const [leftMenu, setLeftMenu] = useState(1);

  return (
    <div className='App'>
      <div id="site">
        <TopArea setLeftMenu={setLeftMenu}/>
        <BodyArea leftMenu={leftMenu}/>
        <BottomArea />
      </div>
    </div>
  );
}

export default App;
