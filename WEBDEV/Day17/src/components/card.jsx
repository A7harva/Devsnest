const card = (props) =>{
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h2>You have consumed {props.number} calories today</h2>
        </div>
    );
}

export default card;