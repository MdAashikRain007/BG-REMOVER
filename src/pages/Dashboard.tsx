import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { useAuth } from '../context/AuthContext';
import { Image, Upload, Heart, Clock, Settings, Plus } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import ImageResult from '../components/ImageResult';

interface ProcessedImage {
  id: string;
  originalUrl: string;
  processedUrl: string;
  createdAt: string;
  liked: boolean;
}

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new');
  const [originalImage, setOriginalImage] = useState<string>('');
  const [processedImage, setProcessedImage] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [recentImages, setRecentImages] = useState<ProcessedImage[]>([]);
  const [likedImages, setLikedImages] = useState<ProcessedImage[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    
    // Mock data for recent images
    const mockRecentImages: ProcessedImage[] = [
      {
        id: '1',
        originalUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
        processedUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
        createdAt: '2025-05-15T14:30:00Z',
        liked: true,
      },
      {
        id: '2',
        originalUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
        processedUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
        createdAt: '2025-05-14T10:15:00Z',
        liked: false,
      },
      {
        id: '3',
        originalUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        processedUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        createdAt: '2025-05-13T16:45:00Z',
        liked: true,
      },
    ];
    
    setRecentImages(mockRecentImages);
    setLikedImages(mockRecentImages.filter(img => img.liked));
  }, [isAuthenticated, navigate]);

  const handleImageProcessed = (originalUrl: string, processedUrl: string) => {
    setOriginalImage(originalUrl);
    setProcessedImage(processedUrl);
    setShowResult(true);
    
    // Add to recent images
    const newImage: ProcessedImage = {
      id: Date.now().toString(),
      originalUrl,
      processedUrl,
      createdAt: new Date().toISOString(),
      liked: false,
    };
    
    setRecentImages([newImage, ...recentImages]);
  };

  const handleReset = () => {
    setOriginalImage('');
    setProcessedImage('');
    setShowResult(false);
  };

  const toggleLike = (id: string) => {
    setRecentImages(
      recentImages.map(img => {
        if (img.id === id) {
          const updatedImg = { ...img, liked: !img.liked };
          return updatedImg;
        }
        return img;
      })
    );
    
    // Update liked images
    const updatedRecentImages = recentImages.map(img => 
      img.id === id ? { ...img, liked: !img.liked } : img
    );
    
    setRecentImages(updatedRecentImages);
    setLikedImages(updatedRecentImages.filter(img => img.liked));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          {user && (
            <p className="text-gray-600">Welcome back, {user.name}</p>
          )}
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="new" className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              New Image
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="liked" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Liked
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="new" className="focus:outline-none">
            <div className="bg-white rounded-xl shadow-md p-6">
              {!showResult ? (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Remove Background from Image
                  </h2>
                  <ImageUploader onImageProcessed={handleImageProcessed} />
                </>
              ) : (
                <ImageResult
                  originalImage={originalImage}
                  processedImage={processedImage}
                  onReset={handleReset}
                />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="focus:outline-none">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Recently Processed Images
              </h2>
              
              {recentImages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Image className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No images yet</h3>
                  <p className="text-gray-500 mb-6">
                    You haven't processed any images yet. Start by uploading an image.
                  </p>
                  <button
                    onClick={() => setActiveTab('new')}
                    className="btn btn-primary"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Image
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentImages.map((image) => (
                    <div key={image.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <div className="relative aspect-video bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]">
                        <img
                          src={image.processedUrl}
                          alt="Processed image"
                          className="w-full h-full object-contain"
                        />
                        <button
                          onClick={() => toggleLike(image.id)}
                          className={`absolute top-2 right-2 p-2 rounded-full ${
                            image.liked
                              ? 'bg-red-100 text-red-500'
                              : 'bg-gray-800/70 text-white hover:bg-gray-900/70'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${image.liked ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {formatDate(image.createdAt)}
                          </span>
                          <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="liked" className="focus:outline-none">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Liked Images
              </h2>
              
              {likedImages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No liked images</h3>
                  <p className="text-gray-500 mb-6">
                    You haven't liked any images yet. Like an image to save it here.
                  </p>
                  <button
                    onClick={() => setActiveTab('recent')}
                    className="btn btn-primary"
                  >
                    View Recent Images
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {likedImages.map((image) => (
                    <div key={image.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <div className="relative aspect-video bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]">
                        <img
                          src={image.processedUrl}
                          alt="Processed image"
                          className="w-full h-full object-contain"
                        />
                        <button
                          onClick={() => toggleLike(image.id)}
                          className="absolute top-2 right-2 p-2 rounded-full bg-red-100 text-red-500"
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {formatDate(image.createdAt)}
                          </span>
                          <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="focus:outline-none">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Account Settings
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input-field"
                        defaultValue={user?.name}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input-field"
                        defaultValue={user?.email}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Subscription</h3>
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <p className="text-purple-800 font-medium">
                      You are currently on the Free plan
                    </p>
                    <p className="text-purple-600 text-sm mt-1">
                      Upgrade to Premium for HD downloads, batch processing, and more.
                    </p>
                  </div>
                  <button className="btn btn-primary">
                    Upgrade to Premium
                  </button>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Password</h3>
                  <button className="btn btn-secondary">
                    Change Password
                  </button>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Danger Zone</h3>
                  <button className="btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;