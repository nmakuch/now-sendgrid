export default ({ bannerSubheader, bannerHeader, button }) => {
  return (
    <div className="banner">
      <div className="root">
        <div className="sub-root">
          <div className="status">
            <span className="employment-status">{bannerSubheader}</span>
          </div>
          <h1>{bannerHeader}</h1>
          <div className="button">
            {button === true ? <a href="/about">Learn more about me</a> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
