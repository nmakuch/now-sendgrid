export default ({ bannerSubheader, bannerHeader, button }) => {
  return (
    <div className="banner">
      <div className="status text-left text-sm">
        <span className="employment-status">{bannerSubheader}</span>
      </div>
      <h1>{bannerHeader}</h1>
      <div className="mt-12 mb-40">
        {button === true ? (
          <a className="bg-black py-4 px-8 text-white" href="/about">
            Learn more about me
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
