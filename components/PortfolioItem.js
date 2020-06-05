export default ({ date, image, category, title, description, bottom, background }) => {
  return (
    <div className="portfolio-item">
      <a href="#">
        <div className="inner">
          <img className={`py-2 ${background}`} src={image} />
          <div className="portfolio-info">
            <div className="category text-darkGray flex justify-between px-6 pt-8 mb-8">
              <span className="text-xs">{category}</span>
              <span className="text-xs">{date}</span>
            </div>
            <h2 className="px-6 text-2xl mb-4">{title}</h2>
            <p className="px-6 text-sm mb-8">{description}</p>
            <div className="px-6 pb-8">
              <span className="bottom text-xs text-darkGray">{bottom}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
