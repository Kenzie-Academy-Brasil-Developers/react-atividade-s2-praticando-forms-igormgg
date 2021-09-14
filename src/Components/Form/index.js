import { useForm } from "react-hook-form";
import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ setShowCard, setUserInfo, setShowForm }) => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("*Digite o email")
      .email("Email inválido")
      .matches(
        "^([-a-zA-Z0-9_-]*@(gmail|yahoo|ymail|rocketmail|bol|hotmail|live|msn|ig|globomail|oi|pop|inteligweb|r7|folha|zipmail).(com|info|gov|net|org|tv)(.[-a-z]{2})?)*$",
        "Email inválido"
      ),
    password: yup
      .string()
      .required("*Digite a senha")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha deve conter pelo menos 8 caracteres, sendo um minúsculo, um maiúsculo, um número, e um caracter especial (!@#$%^&*)"
      ),
    cpf: yup
      .string()
      .required("*Digite o CPF")
      .matches("^([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2})$", "CPF inválido"),
    cardNumber: yup
      .string()
      .required("*Digite o número do cartão")
      .matches(
        "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$",
        "Cartão inválido"
      ),
    ownerName: yup.string().required("*Digite o nome do titular"),
    validThrough: yup.string().required("*Selecione a validade do cartão"),
    cvv: yup
      .string()
      .required("*Digite o código de segurança")
      .matches("^([0-9]{3})$", "CVV inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    setUserInfo(data);
    setShowCard(true);
    setShowForm(false);
  };

  return (
    <div>
      <form className="form_box" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h5>Email</h5>
          <input
            placeholder="exemplo@exemplo.com"
            {...register("email")}
            type="email"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <h5>Senha</h5>
          <input
            placeholder="Digite a senha"
            {...register("password")}
            type="password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <h5>CPF</h5>
          <input placeholder="CPF" {...register("cpf")} type="number" />
          <p>{errors.cpf?.message}</p>
        </div>
        <div>
          <h5>Número do cartão de Crédito</h5>
          <input
            placeholder="Número do Cartão de Crédito"
            {...register("cardNumber")}
            type="text"
          />
          <p>{errors.cardNumber?.message}</p>
        </div>
        <div>
          <h5>Nome do titular do Cartão</h5>
          <input
            placeholder="Nome do Titular (Igual ao Cartão)"
            {...register("ownerName")}
            type="text"
            maxLength="18"
          />
          <p>{errors.ownerName?.message}</p>
        </div>
        <div className="form_box__expiry_code">
          <h5>Data de Validade</h5>
          <h5>Código de Segurança</h5>
          <input
            placeholder="Validade"
            type="date"
            {...register("validThrough")}
          />
          <input
            placeholder="CVV"
            {...register("cvv")}
            type="text"
            maxLength="3"
            id="cvv"
          />
          <p id="validThrough_error">{errors.validThrough?.message}</p>
          <p id="cvv_error">{errors.cvv?.message}</p>
        </div>
        <button>Clonar</button>
      </form>
    </div>
  );
};

export default Form;
