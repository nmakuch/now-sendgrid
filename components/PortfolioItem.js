export default ({ date, image, category, title, description, bottom }) => {
  return (
    <div className="portfolio-item">
      <a href="#">
        <div className="inner">
          <div className="portfolio-image">
            <img src={image} />
          </div>
          <div className="portfolio-info">
            <div className="category flex justify-between px-6 pt-8 mb-8">
              <span className="text-xs">{category}</span>
              <span className="text-xs">{date}</span>
            </div>
            <h2 className="px-6 text-xl mb-4">{title}</h2>
            <p className="px-6 text-sm mb-8">{description}</p>
            <div className="px-6 pb-8">
              <span className="bottom text-xs">{bottom}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
