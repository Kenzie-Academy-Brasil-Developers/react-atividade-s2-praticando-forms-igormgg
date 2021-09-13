import "./styles.css";

const Form = () => {
  return (
    <div>
      <h1>Este site não é uma fraude</h1>
      <form className="form_box">
        <input placeholder="Nome Completo" />
        <input placeholder="CPF" />
        <input placeholder="Data de Nascimento" />
        <input placeholder="Número do Cartão de Crédito" />
        <input placeholder="Nome do Titular (Igual ao Cartão)" />
        <div className="form_box__expiry_code">
          <p>Data de Validade</p>
          <p>Código de Segurança</p>
          <input placeholder="Validade" type="date" />
          <input placeholder="CVV" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
