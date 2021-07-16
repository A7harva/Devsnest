const Card = () =>{
  const Image = () =>{
      return(
          <img src = "https://i.redd.it/x6gnj08ucib71.jpg"></img>
      );
  };
  return (
      <div className="Card">
          <Image />
          <h2>React Card</h2>
          <p>This is a card.</p>
      </div>
  );
};

export default Card;