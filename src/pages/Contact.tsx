import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-20 pb-16">
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Send Us a Message
                    </h2>
                    
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="btn btn-primary"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                              placeholder="you@example.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Billing Question">Billing Question</option>
                            <option value="Feature Request">Feature Request</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.subject && (
                            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                          )}
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                            placeholder="How can we help you?"
                          ></textarea>
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center justify-center">
                                <Send className="h-5 w-5 mr-2" />
                                Send Message
                              </span>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Email</h3>
                          <p className="text-gray-600">bgremover@bgremover.com</p>
                          <p className="text-gray-600">info@bgremover.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <Phone className="h-5 w-5 text-indigo-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                          <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">Office</h3>
                          <p className="text-gray-600">123 Innovation Drive</p>
                          <p className="text-gray-600">San Francisco, CA 94103</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Check out our comprehensive FAQ section for quick answers to common questions.
                  </p>
                  <a href="/faq" className="btn btn-primary w-full">
                    View FAQs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;