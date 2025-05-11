import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Zap, Download, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-gray-900 mb-6">
              How BG Remover Works
            </h1>
            <p className="text-xl text-gray-600">
              Our AI-powered technology makes background removal simple, fast, and accurate. Here's how it works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Upload Your Image</h3>
                <p className="text-gray-600">
                  Upload any image from your device or paste an image URL. We support JPG, PNG, and WEBP formats.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. AI Processing</h3>
                <p className="text-gray-600">
                  Our advanced AI algorithm automatically detects and removes the background in seconds with precision.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Download Result</h3>
                <p className="text-gray-600">
                  Download your image with the background removed as a transparent PNG file, ready to use.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/#upload-section" className="btn btn-primary">
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md text-gray-900 mb-4">
                Our AI Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                BG Remover uses state-of-the-art deep learning models to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Technology"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advanced Neural Networks
                </h3>
                <p className="text-gray-600 mb-6">
                  Our proprietary AI model has been trained on millions of images to accurately identify subjects and separate them from backgrounds, regardless of complexity.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Pixel-perfect edge detection',
                    'Works with complex subjects like hair and fur',
                    'Preserves fine details and transparency',
                    'Handles multiple subjects in a single image',
                    'Processes images in seconds',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md text-gray-900 mb-4">
                Perfect for Many Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                BG Remover helps professionals across industries save time and create stunning visuals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="E-commerce"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce</h3>
                  <p className="text-gray-600">
                    Create professional product photos with clean, consistent backgrounds to boost sales.
                  </p>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Graphic Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Graphic Design</h3>
                  <p className="text-gray-600">
                    Easily extract elements for compositions, collages, and creative projects.
                  </p>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Social Media"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
                  <p className="text-gray-600">
                    Create eye-catching content for Instagram, Facebook, and other platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Ready to Remove Backgrounds?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust BG Remover for perfect background removal every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#upload-section" className="btn bg-white text-indigo-700 hover:bg-gray-100">
                Try It Now
              </Link>
              <Link to="/signup" className="btn border border-white text-white hover:bg-white/10">
                Sign Up for Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;