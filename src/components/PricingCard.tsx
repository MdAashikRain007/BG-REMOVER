import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-xl transform hover:-translate-y-1'
          : 'bg-white text-gray-800 border border-gray-200 shadow-md hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="bg-indigo-800 py-1.5 text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className={`text-xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && (
            <span className={`text-sm ${highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
              /{period}
            </span>
          )}
        </div>
        
        <p className={`text-sm mb-6 ${highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <Link
          to={buttonLink}
          className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 mb-6 ${
            highlighted
              ? 'bg-white text-indigo-700 hover:bg-gray-100'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
          }`}
        >
          {buttonText}
        </Link>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  highlighted
                    ? feature.included
                      ? 'bg-indigo-500 text-white'
                      : 'bg-indigo-800/50 text-indigo-200'
                    : feature.included
                    ? 'bg-purple-100 text-purple-600'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {feature.included ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <span className="text-xs">×</span>
                )}
              </div>
              <span
                className={`ml-3 text-sm ${
                  highlighted
                    ? feature.included
                      ? 'text-white'
                      : 'text-indigo-200'
                    : feature.included
                    ? 'text-gray-700'
                    : 'text-gray-400 line-through'
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;