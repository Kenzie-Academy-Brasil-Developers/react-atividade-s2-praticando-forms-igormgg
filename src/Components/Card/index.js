const Card = ({ userInfo }) => {
  return (
    <div>
      <div>{userInfo.email}</div>
      <div>{userInfo.password}</div>
      <div>{userInfo.cpf}</div>
      <div>{userInfo.cardNumber}</div>
      <div>{userInfo.ownerName}</div>
      <div>{userInfo.validThrough}</div>
      <div>{userInfo.cvv}</div>
    </div>
  );
};

export default Card;
