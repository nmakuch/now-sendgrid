export default ({ date, image, category, title, description, bottom, background }) => {
  return (
    <div className="portfolio-item">
      <a href="#">
        <div className="inner">
          <img className={`${background}`} src={image} />
          <div className="portfolio-info">
            <div className="category">
              <span className="left">{category}</span>
              <span className="right">{date}</span>
            </div>
            <h2 className="portfolio-header">{title}</h2>
            <p className="portfolio-description">{description}</p>
            <div className="bottom-container">
              <span className="bottom">{bottom}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
