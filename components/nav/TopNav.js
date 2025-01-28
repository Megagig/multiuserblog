import ThemeToggle from '../theme/ThemeToggle';
import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="nav shadow justify-content-between mb-2">
      <div className="d-flex justify-content-start">
        <Link className="nav-link" href="/">
          🌀 Megagig
        </Link>

        <Link className="nav-link" href="/create-blog">
          Write A Post
        </Link>
        <Link className="nav-link" href="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link" href="/services">
          Services
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/shop">
          Shop
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <Link className="nav-link" href="/register">
          Register
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default TopNav;
