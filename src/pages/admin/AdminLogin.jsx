import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-ayurveda-green rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl sm:text-3xl">🩺</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-heading font-bold text-gray-800">
            Admin Panel
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            AyurSkin Clinic
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ayurskin.com"
              required
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ayurveda-green focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ayurveda-green focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ayurveda-green text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-ayurveda-dark transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-ayurveda-green hover:underline"
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;