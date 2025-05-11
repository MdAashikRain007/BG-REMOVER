import React, { useState } from 'react';
import { Download, Heart, Share2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface ImageResultProps {
  originalImage: string;
  processedImage: string;
  onReset: () => void;
}

const ImageResult: React.FC<ImageResultProps> = ({ originalImage, processedImage, onReset }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));
  const [showOriginal, setShowOriginal] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'bg-removed-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out my image with removed background!',
        text: 'I removed the background of this image using BG Remover.',
        url: processedImage,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(processedImage)
        .then(() => alert('Image URL copied to clipboard!'))
        .catch((error) => console.error('Could not copy text: ', error));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Background Removed!</h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                <img
                  src={showOriginal ? originalImage : processedImage}
                  alt={showOriginal ? "Original image" : "Processed image"}
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <label className="inline-flex items-center cursor-pointer">
                      <span className={`mr-2 text-sm font-medium ${!showOriginal ? 'text-purple-600' : 'text-gray-500'}`}>
                        After
                      </span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={showOriginal}
                          onChange={() => setShowOriginal(!showOriginal)}
                          className="sr-only"
                        />
                        <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                        <div
                          className={`absolute w-4 h-4 rounded-full transition-transform ${
                            showOriginal ? 'transform translate-x-5 bg-purple-600' : 'bg-white'
                          } shadow top-0.5 left-0.5`}
                        ></div>
                      </div>
                      <span className={`ml-2 text-sm font-medium ${showOriginal ? 'text-purple-600' : 'text-gray-500'}`}>
                        Before
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  liked
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                <span>{likeCount}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={onReset}
                className="btn btn-secondary"
              >
                Process Another Image
              </button>
              
              <button
                onClick={handleDownload}
                className="btn btn-primary"
                disabled={!isAuthenticated}
              >
                <Download className="h-5 w-5 mr-2" />
                {isAuthenticated ? 'Download' : 'Sign Up to Download'}
              </button>
            </div>
          </div>
          
          {!isAuthenticated && (
            <div className="mt-6 bg-purple-50 border border-purple-100 rounded-lg p-4 text-center">
              <p className="text-purple-800 mb-2">
                Want HD downloads and batch processing?
              </p>
              <a
                href="/signup"
                className="inline-block btn btn-primary py-2"
              >
                Sign Up for Free
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageResult;