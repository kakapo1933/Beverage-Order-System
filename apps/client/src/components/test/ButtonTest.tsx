import React, { useRef, useState } from 'react';
import { Button } from '@beverage-order-system/ui';

/**
 * Test component for the Button component from the UI package
 * This component tests various features of the Button component:
 * - Rendering with different variants and sizes
 * - Direct ref passing
 * - Icons
 * - Disabled state
 * - Loading state
 * - Transitions API
 */
export const ButtonTest: React.FC = () => {
	// Ref for testing direct ref passing
	const buttonRef = useRef<HTMLButtonElement>(null);

	// State for testing loading state
	const [isLoading, setIsLoading] = useState(false);

	// State for testing transitions
	const [transitionCount, setTransitionCount] = useState(0);
	const [transitionStatus, setTransitionStatus] = useState('');

	// Function to simulate an expensive operation
	const simulateExpensiveOperation = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	// Function to handle transition start
	const handleTransitionStart = () => {
		setTransitionStatus('Transition started');
		console.log('Transition started');
	};

	// Function to handle transition complete
	const handleTransitionComplete = () => {
		setTransitionStatus('Transition completed');
		setTransitionCount((prev) => prev + 1);
		console.log('Transition completed');
	};

	// Function to log ref information
	const logRefInfo = () => {
		if (buttonRef.current) {
			console.log('Button ref:', buttonRef.current);
			alert('Button ref is working! Check console for details.');
		}
	};

	return (
		<div className='p-4 space-y-8'>
			<h1 className='text-2xl font-bold'>Button Component Test</h1>

			{/* Test different variants */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Button Variants</h2>
				<div className='flex flex-wrap gap-2'>
					<Button variant='primary'>Primary</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='outline'>Outline</Button>
					<Button variant='ghost'>Ghost</Button>
				</div>
			</div>

			{/* Test different sizes */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Button Sizes</h2>
				<div className='flex flex-wrap gap-2 items-center'>
					<Button size='sm'>Small</Button>
					<Button size='md'>Medium</Button>
					<Button size='lg'>Large</Button>
				</div>
			</div>

			{/* Test direct ref passing */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Direct Ref Passing</h2>
				<div className='flex flex-wrap gap-2'>
					<Button ref={buttonRef} onClick={logRefInfo}>
						Click to test ref
					</Button>
				</div>
			</div>

			{/* Test with icons */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Icons</h2>
				<div className='flex flex-wrap gap-2'>
					<Button leftIcon={<span>👈</span>}>Left Icon</Button>
					<Button rightIcon={<span>👉</span>}>Right Icon</Button>
					<Button leftIcon={<span>🔄</span>} rightIcon={<span>🔄</span>}>
						Both Icons
					</Button>
				</div>
			</div>

			{/* Test disabled state */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Disabled State</h2>
				<div className='flex flex-wrap gap-2'>
					<Button disabled>Disabled Button</Button>
				</div>
			</div>

			{/* Test loading state */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Loading State</h2>
				<div className='flex flex-wrap gap-2'>
					<Button isLoading>Always Loading</Button>
					<Button isLoading={isLoading} onClick={simulateExpensiveOperation}>
						Click to Load (2s)
					</Button>
				</div>
			</div>

			{/* Test Transitions API */}
			<div className='space-y-2'>
				<h2 className='text-xl'>Transitions API</h2>
				<div className='flex flex-wrap gap-2'>
					<Button
						useTransitionEffect={true}
						onTransitionStart={handleTransitionStart}
						onTransitionComplete={handleTransitionComplete}
						onClick={() => {
							// Simulate expensive operation
							for (let i = 0; i < 1000000; i++) {
								// Do nothing, just waste CPU cycles
							}
						}}>
						With Transition
					</Button>
					<Button
						onClick={() => {
							// Simulate expensive operation
							for (let i = 0; i < 1000000; i++) {
								// Do nothing, just waste CPU cycles
							}
							setTransitionCount((prev) => prev + 1);
						}}>
						Without Transition
					</Button>
				</div>
				<div>
					<p>Transition status: {transitionStatus}</p>
					<p>Transition count: {transitionCount}</p>
				</div>
			</div>
		</div>
	);
};

export default ButtonTest;
