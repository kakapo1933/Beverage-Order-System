import React from 'react';
import ButtonTest from '../components/test/ButtonTest';
import CardTest from '../components/test/CardTest';

/**
 * Test page for React 19 components
 * This page includes test components for Button and Card
 */
const TestPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">React 19 Component Tests</h1>
      
      <div className="mb-12 p-6 border rounded-lg shadow-md">
        <ButtonTest />
      </div>
      
      <div className="p-6 border rounded-lg shadow-md">
        <CardTest />
      </div>
    </div>
  );
};

export default TestPage;