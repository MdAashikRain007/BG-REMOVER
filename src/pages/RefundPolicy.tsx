import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Last updated: May 15, 2025</p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Refund Eligibility</h2>
              <p>
                We offer a 7-day money-back guarantee for all new Premium and Enterprise subscriptions. If you're not satisfied with our service within the first 7 days of your subscription, you can request a full refund.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How to Request a Refund</h2>
              <p>
                To request a refund, please contact our support team through our <Link to="/contact" className="text-purple-600 hover:text-purple-700">Contact page</Link> or by emailing support@bgremover.com. Please include your account email address and the reason for your refund request.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Refund Process</h2>
              <p>
                Once we receive your refund request, we will review it and notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Exceptions</h2>
              <p>
                The following situations are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Requests made after the 7-day money-back guarantee period</li>
                <li>Subscription renewals (after the initial subscription period)</li>
                <li>Accounts that have violated our Terms and Conditions</li>
                <li>Accounts that have been suspended or terminated for any reason</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Cancellation Policy</h2>
              <p>
                You can cancel your subscription at any time by logging into your account settings or contacting our support team. Upon cancellation, your subscription will remain active until the end of your current billing period, and you will not be charged for the next billing cycle.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this Refund Policy periodically for changes.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Refund Policy, please <Link to="/contact" className="text-purple-600 hover:text-purple-700">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;