'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    try {
      setLoading(true);
      const response = await fetch(`${process.env.API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      // console.log(data);
      if (!response.ok) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(data.success);
        setName('');
        setEmail('');
        setPassword('');
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Something went wrong! please try again latter');
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-90">
        <div className="col-lg-5 p-4 shadow">
          <h2 className="fw-bold lead mb-4">Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              type=" text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control p-3 mb-4"
              placeholder="Your  Name"
              required
            />
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
        </div>
      </div>
    </div>
  );
};

export default Register;
