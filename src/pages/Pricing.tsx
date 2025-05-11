import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for occasional use and trying out the service.',
      features: [
        { text: 'Remove backgrounds from images', included: true },
        { text: 'Standard quality downloads', included: true },
        { text: 'Process up to 5 images per day', included: true },
        { text: 'Basic editing tools', included: true },
        { text: 'HD downloads', included: false },
        { text: 'Batch processing', included: false },
        { text: 'API access', included: false },
        { text: 'Priority support', included: false },
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
    },
    {
      title: 'Premium',
      price: '$9.99',
      period: 'month',
      description: 'For professionals who need more power and features.',
      features: [
        { text: 'Remove backgrounds from images', included: true },
        { text: 'HD quality downloads', included: true },
        { text: 'Unlimited images per day', included: true },
        { text: 'Advanced editing tools', included: true },
        { text: 'Batch processing', included: true },
        { text: 'API access (100 calls/day)', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom branding', included: false },
      ],
      buttonText: 'Upgrade Now',
      buttonLink: '/signup',
      highlighted: true,
    },
    {
      title: 'Enterprise',
      price: '$49.99',
      period: 'month',
      description: 'For teams and businesses with high-volume needs.',
      features: [
        { text: 'Remove backgrounds from images', included: true },
        { text: 'Ultra HD quality downloads', included: true },
        { text: 'Unlimited images', included: true },
        { text: 'All editing tools', included: true },
        { text: 'Advanced batch processing', included: true },
        { text: 'Unlimited API access', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Custom branding', included: true },
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
    },
  ];

  const faqs = [
    {
      question: 'How does the background removal work?',
      answer: 'Our AI-powered technology analyzes your image to identify the subject and separate it from the background. It works with people, products, animals, and more, providing clean edges and accurate results in seconds.',
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support all common image formats including JPG, PNG, WEBP, and more. You can download your processed images in PNG format with transparency.',
    },
    {
      question: 'Is there a limit to image size?',
      answer: 'Free users can upload images up to 5MB in size. Premium and Enterprise users can upload images up to 25MB.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 7-day money-back guarantee for all new Premium and Enterprise subscriptions if you\'re not satisfied with our service.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Pricing Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that's right for you and start removing backgrounds instantly.
            </p>
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
              <span className="px-4 py-2 text-purple-700 bg-purple-100 rounded-md font-medium">
                Monthly
              </span>
              <span className="px-4 py-2 text-gray-500">
                Yearly (Save 20%)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonLink={plan.buttonLink}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-500 text-sm">
            All plans include a 7-day money-back guarantee. No questions asked.
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md text-gray-900 mb-4">
              Compare Features
            </h2>
            <p className="text-gray-600">
              See which plan is right for your needs
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
                  <td className="px-6 py-4 text-gray-800">Background removal</td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-purple-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Image quality</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center bg-purple-50">HD</td>
                  <td className="px-6 py-4 text-center">Ultra HD</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Daily image limit</td>
                  <td className="px-6 py-4 text-center">5 images</td>
                  <td className="px-6 py-4 text-center bg-purple-50">Unlimited</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Batch processing</td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-purple-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">API access</td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-purple-50">100 calls/day</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Support</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center bg-purple-50">Priority</td>
                  <td className="px-6 py-4 text-center">Dedicated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Custom branding</td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-purple-50"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions?
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust BG Remover for perfect background removal every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" className="btn bg-white text-indigo-700 hover:bg-gray-100">
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;