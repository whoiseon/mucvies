import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import BoxOffice from "./routes/BoxOffice";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/boxoffice" element={<BoxOffice />} />
      </Routes>
    </div>
  );
}

export default App;
