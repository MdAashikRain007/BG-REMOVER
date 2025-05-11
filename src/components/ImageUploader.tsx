import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ImageUploaderProps {
  onImageProcessed: (originalUrl: string, processedUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageProcessed }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isAuthenticated } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setError('');

    const droppedFile = e.dataTransfer.files?.[0];

    if (!droppedFile) return;

    if (!droppedFile.type.startsWith('image/')) {
      setError('Please drop an image file');
      return;
    }

    setFile(droppedFile);
    setPreviewUrl(URL.createObjectURL(droppedFile));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleProcessImage = async () => {
    if (!file && !previewUrl) {
      setError('Please upload an image');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      if (file) {
        formData.append('image_file', file);
      }

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'DknH3j14XHENbcWiYyU6irVA', // Use the provided API key
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to process image: ${errorText}`);
      }

      const blob = await response.blob();
      const processedImageUrl = URL.createObjectURL(blob);

      onImageProcessed(previewUrl, processedImageUrl);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError('Error processing image. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!previewUrl ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors duration-300"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Drag & drop your image here</h3>
          <p className="text-gray-500 mb-4">or click to browse</p>
          <p className="text-sm text-gray-400">Supports JPG, PNG, WEBP (Max 5MB)</p>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-auto max-h-[400px] object-contain bg-gray-100"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-900/70 transition-colors duration-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleProcessImage}
          disabled={!previewUrl || isLoading}
          className={`btn btn-primary w-full max-w-xs ${
            !previewUrl || isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <ImageIcon className="h-5 w-5 mr-2" />
              Remove Background
            </>
          )}
        </button>
      </div>

      {!isAuthenticated && previewUrl && (
        <p className="text-sm text-center mt-4 text-gray-500">
          <Link to="/signup" className="text-purple-600 hover:text-purple-700">
            Sign up
          </Link>{' '}
          for free to download in HD and access more features!
        </p>
      )}
    </div>
  );
};

export default ImageUploader;