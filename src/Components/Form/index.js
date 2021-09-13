import "./styles.css";

const Form = () => {
  return (
    <div className="form_box">
      <h1>Este site não é uma fraude</h1>
      <form>
        <input placeholder="Nome Completo" />
        <input placeholder="CPF" />
        <input placeholder="Data de Nascimento" />
        <input placeholder="Número do Cartão de Crédito" />
        <input placeholder="Nome do Titular (Igual ao Cartão)" />
        <input placeholder="Validade" />
        <input placeholder="Código de segurança" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
