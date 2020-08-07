export default ({ title, description, link, image, textSide, color }) => {
  return (
    <React.Fragment>
      {textSide === "left" ? (
        <div className={`portfolio-item-left ${color}`}>
          <div className="portfolio-item-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Read more</a>
          </div>
          <img src={image} />
        </div>
      ) : (
        <div className={`portfolio-item-right ${color}`}>
          <img src={image} />
          <div className="portfolio-item-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Read more</a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
