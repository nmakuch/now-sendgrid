import Logo from "./Logo";

export default () => {
  return (
    <header>
      <a className="logo" href="http://minimaldev.com">
        <Logo />
      </a>

      <input id="nav" type="checkbox" />
      <label htmlFor="nav"></label>

      <nav>
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
      </nav>
    </header>
  );
};
