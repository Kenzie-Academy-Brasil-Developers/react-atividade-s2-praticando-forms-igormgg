import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <header>
        <h1>Este site não é uma fraude</h1>
        <h3>"É verdade esse bilete"</h3>
      </header>
      <body>
        <Form setShowCard={setShowCard} setUserInfo={setUserInfo} />
        {showCard && <Card userInfo={userInfo} />}
      </body>
    </div>
  );
}

export default App;
