export default ({ bannerSubheader, bannerHeader, button }) => {
  return (
    <div className="banner">
      <div className="status">
        <span className="employment-status">{bannerSubheader}</span>
      </div>
      <h1>{bannerHeader}</h1>
      <div className="button">
        {button === true ? (
          <a href="/about">
            Learn more about me
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
