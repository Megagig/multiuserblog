'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (data.success) {
    toast.success(data.message);
    router.push('/login');
  } else {
    toast.error(data.message);
  }
  setLoading(false);
};

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-90">
        <div className="col-lg-5 p-4 shadow">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
