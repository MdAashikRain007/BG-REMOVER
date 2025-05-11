import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const generalFAQs: FAQItem[] = [
    {
      question: 'How does BG Remover work?',
      answer: (
        <p>
          BG Remover uses advanced AI and machine learning algorithms to automatically detect the subject in your image and separate it from the background. Our technology has been trained on millions of images to provide accurate results for a wide variety of subjects, including people, products, animals, and more.
        </p>
      ),
    },
    {
      question: 'What image formats are supported?',
      answer: (
        <p>
          We support all common image formats including JPG, PNG, and WEBP. You can download your processed images in PNG format with transparency.
        </p>
      ),
    },
    {
      question: 'Is there a limit to image size?',
      answer: (
        <p>
          Free users can upload images up to 5MB in size. Premium and Enterprise users can upload images up to 25MB.
        </p>
      ),
    },
    {
      question: 'How accurate is the background removal?',
      answer: (
        <p>
          Our AI technology provides highly accurate results, especially for common subjects like people, products, and animals. It works well with complex edges like hair and fur. However, very complex images or unusual subjects might require minor touch-ups for perfect results.
        </p>
      ),
    },
    {
      question: 'Can I process multiple images at once?',
      answer: (
        <p>
          Yes, batch processing is available for Premium and Enterprise users. You can upload multiple images and process them all at once, saving you time and effort.
        </p>
      ),
    },
  ];

  const accountFAQs: FAQItem[] = [
    {
      question: 'Do I need to create an account?',
      answer: (
        <p>
          You can use the basic features without an account, but creating a free account allows you to save your processed images, access your history, and get more free images per day.
        </p>
      ),
    },
    {
      question: 'How do I upgrade my account?',
      answer: (
        <p>
          You can upgrade to Premium or Enterprise by going to your account settings and selecting "Upgrade Plan." You'll be guided through the payment process to activate your new plan immediately.
        </p>
      ),
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: (
        <p>
          Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged for the next period.
        </p>
      ),
    },
    {
      question: 'Do you offer refunds?',
      answer: (
        <p>
          We offer a 7-day money-back guarantee for all new Premium and Enterprise subscriptions if you're not satisfied with our service. Please contact our support team to request a refund.
        </p>
      ),
    },
  ];

  const technicalFAQs: FAQItem[] = [
    {
      question: 'How can I integrate BG Remover into my application?',
      answer: (
        <p>
          Premium and Enterprise users have access to our API, which allows you to integrate background removal directly into your applications. We provide comprehensive documentation and SDKs for popular programming languages to make integration easy.
        </p>
      ),
    },
    {
      question: 'Is my data secure?',
      answer: (
        <p>
          Yes, we take data security very seriously. Your images are processed securely and are not stored permanently without your permission. We use encryption for all data transfers and follow industry best practices for data protection.
        </p>
      ),
    },
    {
      question: 'Can I use BG Remover on mobile devices?',
      answer: (
        <p>
          Yes, BG Remover is fully responsive and works on desktop, tablet, and mobile devices. You can access all features through your web browser without needing to install any apps.
        </p>
      ),
    },
    {
      question: 'Do you have a desktop application?',
      answer: (
        <p>
          Currently, BG Remover is a web-based service only. However, Enterprise users can request a custom desktop solution for high-volume processing needs.
        </p>
      ),
    },
  ];

  const renderFAQSection = (title: string, faqs: FAQItem[], startIndex: number) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const actualIndex = startIndex + index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(actualIndex)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === actualIndex ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                className={`bg-gray-50 px-4 transition-all duration-300 ${
                  openIndex === actualIndex ? 'py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="pt-20 pb-16">
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about BG Remover and our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {renderFAQSection('General Questions', generalFAQs, 0)}
            {renderFAQSection('Account & Billing', accountFAQs, generalFAQs.length)}
            {renderFAQSection('Technical Questions', technicalFAQs, generalFAQs.length + accountFAQs.length)}
            
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer to your question, please contact our support team.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;