import React, { useRef } from 'react';
import { Card } from '@beverage-order-system/ui';

/**
 * Test component for the Card component from the UI package
 * This component tests various features of the Card component:
 * - Rendering with and without header
 * - Rendering with and without footer
 * - Direct ref passing
 */
export const CardTest: React.FC = () => {
  // Ref for testing direct ref passing
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Function to log ref information
  const logRefInfo = () => {
    if (cardRef.current) {
      console.log('Card ref:', cardRef.current);
      alert('Card ref is working! Check console for details.');
    }
  };
  
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">Card Component Test</h1>
      
      {/* Test basic card */}
      <div className="space-y-2">
        <h2 className="text-xl">Basic Card</h2>
        <Card className="w-64 p-4">
          <p>This is a basic card without header or footer.</p>
        </Card>
      </div>
      
      {/* Test card with header */}
      <div className="space-y-2">
        <h2 className="text-xl">Card with Header</h2>
        <Card 
          className="w-64 p-4" 
          title="Card Title"
          showHeader={true}
        >
          <p>This card has a header with a title.</p>
        </Card>
      </div>
      
      {/* Test card with footer */}
      <div className="space-y-2">
        <h2 className="text-xl">Card with Footer</h2>
        <Card 
          className="w-64 p-4" 
          footer={<button className="text-blue-500">Action</button>}
          showFooter={true}
        >
          <p>This card has a footer with an action button.</p>
        </Card>
      </div>
      
      {/* Test card with header and footer */}
      <div className="space-y-2">
        <h2 className="text-xl">Card with Header and Footer</h2>
        <Card 
          className="w-64 p-4" 
          title="Card Title"
          showHeader={true}
          footer={<button className="text-blue-500">Action</button>}
          showFooter={true}
        >
          <p>This card has both a header and a footer.</p>
        </Card>
      </div>
      
      {/* Test direct ref passing */}
      <div className="space-y-2">
        <h2 className="text-xl">Direct Ref Passing</h2>
        <Card 
          ref={cardRef} 
          className="w-64 p-4 cursor-pointer" 
          onClick={logRefInfo}
        >
          <p>Click this card to test ref passing.</p>
        </Card>
      </div>
    </div>
  );
};

export default CardTest;