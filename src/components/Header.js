import Link from './Link';

export default () => (
  <nav className="header">
    <span className="logo">Appinda</span>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
);