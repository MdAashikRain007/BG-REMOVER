import React, { useState } from 'react';
import { Download } from 'lucide-react';
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
              <div className="relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center p-1 sm:p-4">
                <img
                  src={showOriginal ? originalImage : processedImage}
                  alt={showOriginal ? "Original image" : "Processed image"}
                  className="w-full h-auto max-h-[80vh] sm:max-h-[500px] object-contain"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full flex justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-md">
                    <label className="inline-flex items-center cursor-pointer">
                      <span className={`mr-2 text-xs sm:text-sm font-medium ${!showOriginal ? 'text-purple-600' : 'text-gray-500'}`}>
                        After
                      </span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={showOriginal}
                          onChange={() => setShowOriginal(!showOriginal)}
                          className="sr-only"
                        />
                        <div className="w-8 h-4 sm:w-10 sm:h-5 bg-gray-200 rounded-full shadow-inner"></div>
                        <div
                          className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-transform ${
                            showOriginal ? 'transform translate-x-4 sm:translate-x-5 bg-purple-600' : 'bg-white'
                          } shadow top-0.5 left-0.5`}
                        ></div>
                      </div>
                      <span className={`ml-2 text-xs sm:text-sm font-medium ${showOriginal ? 'text-purple-600' : 'text-gray-500'}`}>
                        Before
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center w-full mt-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 w-full sm:w-auto">
              <button
                onClick={onReset}
                className="btn btn-secondary w-full sm:w-auto"
              >
                Process Another Image
              </button>
              <button
                onClick={handleDownload}
                className="btn btn-primary w-full sm:w-auto"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageResult;