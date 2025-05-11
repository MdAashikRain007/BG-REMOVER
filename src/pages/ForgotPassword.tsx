import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      setError('Error sending password reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
          <div className="p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h1>
                  <p className="text-gray-600">
                    Enter your email address and we'll send you a link to reset your password
                  </p>
                </div>
                
                {error && (
                  <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-field pl-10"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className={`btn btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send reset link'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                
                <div className="mt-8 text-center">
                  <Link to="/login" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to sign in
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <span className="font-medium">{email}</span>
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  If you don't see it, please check your spam folder
                </p>
                <div className="flex flex-col space-y-3">
                  <Link to="/login" className="btn btn-primary">
                    Return to sign in
                  </Link>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-secondary"
                  >
                    Resend email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;