import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Request from "./components/Request";
import DisplayWeather from "./components/DisplayWeather";

function App() {
  const [zipToSearch, setZipToSearch] = useState(95192);

  //Get zip code
  const getZip = ({ zip }) => {
    //TODO: Validate input, for now assume legitimate
    setZipToSearch(zip);
  };

  return (
    <div className="App">
      <Header />
      <Request onRequest={getZip} />
      <DisplayWeather zipCode={zipToSearch} />
    </div>
  );
}

export default App;
