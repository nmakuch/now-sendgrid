export default ({ bannerSubheader, bannerHeader }) => {
  return (
    <div className="banner">
      <div className="status text-left text-sm">
        <span className="employment-status">{bannerSubheader}</span>
      </div>
      <h1>{bannerHeader}</h1>
    </div>
  );
};
