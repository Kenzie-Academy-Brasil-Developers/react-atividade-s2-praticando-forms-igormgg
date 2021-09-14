import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <header>
        <h1>Este site não é uma fraude</h1>
        <h3>"É verdade esse bilete"</h3>
      </header>
      <body>
        {showForm && (
          <Form
            setShowCard={setShowCard}
            setUserInfo={setUserInfo}
            setShowForm={setShowForm}
          />
        )}
        {showCard && (
          <Card
            userInfo={userInfo}
            setShowForm={setShowForm}
            setShowCard={setShowCard}
          />
        )}
      </body>
    </div>
  );
}

export default App;
