export default ({ bannerSubheader, bannerHeader, button }) => {
  return (
    <div className="banner flex justify-center items-center px-24 mt-32">
      <div className="w-4/5 mr-12">
        <div className="pr-24">
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
