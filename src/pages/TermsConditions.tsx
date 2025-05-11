import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Last updated: May 15, 2025</p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to BG Remover ("we," "our," or "us"). These Terms and Conditions govern your use of our website located at bgremover.com (the "Service") and any related services provided by BG Remover.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Content</h2>
              <p>
                Our Service allows you to upload, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you upload to the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By uploading Content to the Service, you grant us the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for the purpose of providing the Service.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Subscription and Payments</h2>
              <p>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis, depending on the type of subscription plan you select.
              </p>
              <p>
                At the end of each period, your subscription will automatically renew under the same conditions unless you cancel it or BG Remover cancels it.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Free Trial</h2>
              <p>
                BG Remover may, at its sole discretion, offer a subscription with a free trial for a limited period of time.
              </p>
              <p>
                You may be required to enter your billing information to sign up for the free trial. If you do enter your billing information when signing up for a free trial, you will not be charged by BG Remover until the free trial has expired.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of BG Remover and its licensors.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall BG Remover, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please <Link to="/contact" className="text-purple-600 hover:text-purple-700">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;