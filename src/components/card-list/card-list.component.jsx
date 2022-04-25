import CardContainer from '../card/card.component';

import './card-list.style.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
