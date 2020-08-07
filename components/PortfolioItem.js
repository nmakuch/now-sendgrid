export default ({ title, description, link, image, textSide, color }) => {
  return (
    <React.Fragment>
      {textSide === "left" ? (
        <div className="portfolio-item">
          <div
            className={`portfolio-item ${color} flex justify-center items-center px-24 py-12`}
          >
            <div className="portfolio-item-text w-2/5">
              <h2 className="text-3xl mb-8">{title}</h2>
              <p className="mb-12 leading-7">{description}</p>
              <a className="bg-black py-4 px-8 text-white" href={link}>
                Read more
              </a>
            </div>
            <img className="w-2/5" src={image} />
          </div>
        </div>
      ) : (
        <div
          className={`portfolio-item ${color} flex items-center justify-center px-24 py-20`}
        >
          <img className="w-2/5 mr-24" src={image} />
          <div className="portfolio-item-text w-2/5">
            <h2 className="text-3xl mb-8">{title}</h2>
            <p className="mb-12 leading-7">{description}</p>
            <a className="bg-black py-4 px-8 text-white" href={link}>
              Read more
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
