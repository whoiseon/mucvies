import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import BoxOffice from "./routes/BoxOffice";
import Ranking from "./routes/Ranking";
import OTT from "./routes/OTT";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/ott" element={<OTT />} />
        <Route path="/boxoffice/:period" element={<BoxOffice />} />
      </Routes>
    </div>
  );
}

export default App;
