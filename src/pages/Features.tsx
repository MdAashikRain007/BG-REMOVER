import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Clock, Users, Image, Layers, Code, Smartphone } from 'lucide-react';

const Features = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-gray-900 mb-6">
              Powerful Features for Perfect Results
            </h1>
            <p className="text-xl text-gray-600">
              Discover all the tools and capabilities that make BG Remover the best choice for background removal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Remove backgrounds in seconds, not minutes. Our AI processes images instantly for maximum efficiency.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Privacy</h3>
                <p className="text-gray-600">
                  Your images are processed securely and never stored without your permission. Your data stays private.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Batch Processing</h3>
                <p className="text-gray-600">
                  Save time by removing backgrounds from multiple images at once with our efficient batch processing.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Share projects with your team and work together seamlessly with collaborative features.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Image className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HD Quality</h3>
                <p className="text-gray-600">
                  Download your images in high definition with perfect edge detection and no quality loss.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Formats</h3>
                <p className="text-gray-600">
                  Export your images in various formats including PNG, JPG, and WEBP to suit your needs.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">API Access</h3>
                <p className="text-gray-600">
                  Integrate background removal directly into your applications with our powerful API.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                <p className="text-gray-600">
                  Use BG Remover on any device with our responsive design that works on desktop, tablet, and mobile.
                </p>
              </div>

              <div className="card p-6 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">URL Image Processing</h3>
                <p className="text-gray-600">
                  Process images directly from URLs without downloading them first, saving you time and storage space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how our plans compare and choose the one that's right for you.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-500 font-medium">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Free</th>
                  <th className="px-6 py-4 text-center text-purple-700 font-medium">Premium</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">AI Background Removal</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center bg-purple-50">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">URL Image Processing</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center bg-purple-50">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Image Quality</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center bg-purple-50">HD</td>
                  <td className="px-6 py-4 text-center">Ultra HD</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Daily Image Limit</td>
                  <td className="px-6 py-4 text-center">5 images</td>
                  <td className="px-6 py-4 text-center bg-purple-50">Unlimited</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Batch Processing</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center bg-purple-50">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">API Access</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center bg-purple-50">100 calls/day</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Team Members</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center bg-purple-50">5</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Custom Branding</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center bg-purple-50">✗</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/pricing" className="btn btn-primary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md text-gray-900 mb-4">
                  Powerful API for Developers
                </h2>
                <p className="text-gray-600 mb-6">
                  Integrate our background removal technology directly into your applications with our easy-to-use API.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Simple REST API with comprehensive documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">SDKs available for popular programming languages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Webhook support for asynchronous processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Customizable parameters for fine-tuned results</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/contact" className="btn btn-primary">
                    Get API Access
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>
{`// Example API request
fetch('https://api.bgremover.com/v1/remove', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image_url: 'https://example.com/image.jpg',
    size: 'auto',
    format: 'png',
    channels: 'rgba'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                  </code>
                </pre>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust BG Remover for perfect background removal every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn bg-white text-indigo-700 hover:bg-gray-100">
                Get Started for Free
              </Link>
              <Link to="/#upload-section" className="btn border border-white text-white hover:bg-white/10">
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;