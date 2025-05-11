import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Last updated: May 15, 2025</p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                BG Remover ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, and share information about you when you use our website and services.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Service, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> This includes your name, email address, and billing information when you create an account or subscribe to our service.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our Service, including your browsing actions and patterns.
                </li>
                <li>
                  <strong>Content:</strong> The images you upload to our Service for background removal.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect about you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. How We Share Your Information</h2>
              <p>
                We may share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, or sale of all or a portion of our assets.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information for other purposes with your consent.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal information</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
              <p>
                Our Service is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-purple-600 hover:text-purple-700">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;