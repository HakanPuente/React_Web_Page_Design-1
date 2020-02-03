import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Index</a>
    </Link>
    <Link href="/about" as="hakkimizda">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blogs">
      <a style={linkStyle}>Blogs</a>
    </Link>
  </div>
);

export default Header;