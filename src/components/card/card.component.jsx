import './card.style.css';

const CardContainer = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2`} alt="pic of monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
