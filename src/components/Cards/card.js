import './card.scss'

function Card(props) {
    return (
        <div className="card">
            <img src={props.img}/>
            <div className="card-text">
                <p>{props.text}</p>
            <p className="c-number">{props.numder}</p>
            </div>
            
        </div>
    );
}

export default Card;