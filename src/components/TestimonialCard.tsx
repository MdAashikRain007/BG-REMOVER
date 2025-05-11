import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  rating,
  avatarUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;