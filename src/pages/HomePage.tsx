import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Link as LinkIcon, Image as ImageIcon, Zap, Shield, Clock, Users } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import ImageResult from '../components/ImageResult';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const [originalImage, setOriginalImage] = useState<string>('');
  const [processedImage, setProcessedImage] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleImageProcessed = (originalUrl: string, processedUrl: string) => {
    setOriginalImage(originalUrl);
    setProcessedImage(processedUrl);
    setShowResult(true);
  };

  const handleReset = () => {
    setOriginalImage('');
    setProcessedImage('');
    setShowResult(false);
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Photographer',
      company: 'Visual Arts Studio',
      testimonial: 'BG Remover has saved me countless hours of editing. The AI is incredibly accurate, even with complex images.',
      rating: 5,
      avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Manager',
      company: 'StyleTrend',
      testimonial: 'We use BG Remover for all our product photos. It\'s fast, accurate, and the batch processing feature is a game-changer.',
      rating: 5,
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Graphic Designer',
      company: 'Creative Solutions',
      testimonial: 'The quality of the background removal is exceptional. I\'ve tried many tools, but BG Remover is by far the best.',
      rating: 4,
      avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="heading-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Remove Image Backgrounds Instantly with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Our powerful AI technology removes backgrounds from images in seconds with perfect precision. No design skills needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
              <a href="#upload-section" className="btn btn-primary">
                <Upload className="h-5 w-5 mr-2" />
                Upload Image
              </a>
            
            </div>
          </div>

          {/* Before/After Demo */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Before
                  </span>
                </div>
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Original image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    After
                  </span>
                </div>
                <img
                  src="/remive image.png"
                  alt="Processed image"
                  className="w-full h-auto rounded-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-24 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Powerful Features for Perfect Results
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered tool makes background removal simple, fast, and precise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Remove backgrounds in seconds, not minutes. Our AI processes images instantly.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Privacy</h3>
              <p className="text-gray-600">
                Your images are processed securely and never stored without your permission.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Batch Processing</h3>
              <p className="text-gray-600">
                Save time by removing backgrounds from multiple images at once.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Share projects with your team and work together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">
              Remove Background from Any Image
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Upload your image or paste a URL to get started. It\'s that simple.
            </p>
          </div>

          {!showResult ? (
            <ImageUploader onImageProcessed={handleImageProcessed} />
          ) : (
            <ImageResult
              originalImage={originalImage}
              processedImage={processedImage}
              onReset={handleReset}
            />
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Loved by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who trust BG Remover for their image editing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Ready to Remove Backgrounds Like a Pro?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust BG Remover for perfect background removal every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn bg-white text-indigo-700 hover:bg-gray-100">
                Get Started for Free
              </Link>
              <Link to="/pricing" className="btn border border-white text-white hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;