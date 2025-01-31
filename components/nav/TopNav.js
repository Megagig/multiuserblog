import ThemeToggle from '../theme/ThemeToggle';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const TopNav = () => {
  const { data, status, loading } = useSession();
  console.log(data, status);
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

      <div className="d-flex align-items-center">
        {status === 'authenticated' ? (
          <>
            <Link className="nav-link" href="/dashboard/user">
              {data?.user?.name}
            </Link>
            <a
              className="nav-link pointer"
              onClick={() => signOut({ callbackUrl: '/login' })}
            >
              Logout
            </a>
          </>
        ) : (
          <div className="d-flex justify-content-center mt-4">
            <Link className="nav-link" href="/login">
              Login
            </Link>
            <Link className="nav-link" href="/register">
              Register
            </Link>
          </div>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default TopNav;
