'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      toast.error(result.error);
      setLoading(false);
    } else {
      toast.success('Login successful');
      router.push('/');
    }
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-90">
        <div className="col-lg-5 p-4 shadow">
          <h2 className="fw-bold lead mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-3 mb-4"
              placeholder="Your Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control p-3 mb-4"
              placeholder="Your Password"
              required
            />
            <button
              className="btn btn-lg btn-primary w-100 mb-2"
              disabled={loading}
            >
              {loading ? 'Please Wait...' : 'Submit'}
            </button>
          </form>
          <Link
            className="nav-link text-center text-danger"
            href="/forgot-password"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
