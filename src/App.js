import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GNB from './components/GNB';
import Main from './components/Main';
import Music from './components/Music';
import WholeLyrics from './components/WholeLyrics';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <div className="row">
          <GNB />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/lyrics" element={<WholeLyrics />} />
          </Routes>
          <Music />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
