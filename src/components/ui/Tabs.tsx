import React, { createContext, useContext, useState } from 'react';

type TabsContextType = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children, className = '' }) => {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className = '' }) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }
  
  const { value: selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      onClick={() => onValueChange(value)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        isSelected
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      } ${className}`}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className = '' }) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }
  
  const { value: selectedValue } = context;
  
  if (selectedValue !== value) {
    return null;
  }
  
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={`focus:outline-none ${className}`}
    >
      {children}
    </div>
  );
};