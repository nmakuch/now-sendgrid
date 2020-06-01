import Logo from "./Logo"

export default () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="links">
        <ul>
          <li>
            <a href="/">Portfolio</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
