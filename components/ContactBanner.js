export default ({
  bannerSubheader,
  bannerHeaderFirst,
  bannerHeaderLast,
  email,
}) => {
  return (
    <div className="banner">
      <div className="status text-left text-sm">
        <span className="employment-status">{bannerSubheader}</span>
      </div>
      <h1>
        {bannerHeaderFirst} <span>{email}</span> {bannerHeaderLast}
      </h1>
    </div>
  );
};
