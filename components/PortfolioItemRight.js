export default ({ title, image, category }) => {
    return (
      <div className="portfolio-item-right">
        <a href="#">
          <div className="inner">
            <div>
              <p>{category}</p>
              <h2>{title}</h2>
            </div>
            <img src={image} />
          </div>
        </a>
      </div>
    );
  };
