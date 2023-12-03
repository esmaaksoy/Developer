import "../scss/card.scss"
const Card = ({data}) => {
  return (
    <div className="container">
      {data.map(({ id,name, job, img,comment }) => (
        <div key={id} className="card">
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p><span>Comment:</span>{comment}</p>
          <img src={img} alt="" />
          <div>
            <button className="small">Follow</button>
            <button className="large">About</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
