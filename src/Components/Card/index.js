import "./styles.css";

const Card = ({ userInfo, setShowForm, setShowCard }) => {
  const clickHandler = () => {
    setShowForm(true);
    setShowCard(false);
  };

  return (
    <div className="card_box">
      <div className="infoCard">
        <h5 id="infoCard_bank">BANK</h5>
        <h5 id="infoCard_cardNumber">{userInfo.cardNumber}</h5>
        <h5 id="infoCard_validThrough">Válido até: {userInfo.validThrough}</h5>
        <h5 id="infoCard_ownerName">{userInfo.ownerName}</h5>
        <h5 id="infoCard_cpf">{userInfo.cpf}</h5>
      </div>
      <div className="infoCard">
        <div id="infoCard_strip"></div>
        <div id="emailPassCvvDiv">
          <div id="emailAndPassDiv">
            <h5 id="infoCard_email">{userInfo.email}</h5>
            <h5 id="infoCard_password">{userInfo.password}</h5>
          </div>
          <div id="infoCardDiv">
            <h5 id="infoCard_cvv">{userInfo.cvv}</h5>
          </div>
        </div>
      </div>
      <button onClick={() => clickHandler()}>Clonar outro cartão</button>
    </div>
  );
};

export default Card;
