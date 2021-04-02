import './FlipCard.css';

function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.img} alt="Avatar" className="flip-card-image" />
        </div>
        <div className="flip-card-back">
          <h1>{props.header}</h1>
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
