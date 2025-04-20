# React 19 Upgrade Documentation

## Overview

This document provides information about the upgrade from React 18 to React 19 in the Beverage Order System project. It covers the changes made, new features implemented, and any considerations for developers working with the updated codebase.

## Package Updates

The following packages have been updated to support React 19:

- React core packages:
  - `react`: ^19.0.0
  - `react-dom`: ^19.0.0
  - `@types/react`: ^19.0.0
  - `@types/react-dom`: ^19.0.0

- Build tools:
  - `@vitejs/plugin-react`: ^5.0.0

- Third-party libraries:
  - `react-router-dom`: ^6.22.0
  - `react-icons`: ^5.0.0
  - `recharts`: ^2.12.0
  - `zustand`: ^4.5.0

- ESLint plugins:
  - `eslint-plugin-react`: ^8.0.0
  - `eslint-plugin-react-hooks`: ^5.0.0
  - `eslint-plugin-react-refresh`: ^1.0.0

## API Changes

### Direct Ref Passing

React 19 introduces a new approach to handling refs, eliminating the need for `forwardRef`. Components can now accept refs directly as props. The following components have been updated to use this new approach:

- Button component (`packages/ui/src/components/Button/Button.tsx`)
- Card component (`packages/ui/src/components/Card/Card.tsx`)

Example of the new approach:

```tsx
// Before (React 18)
import React, { forwardRef } from 'react';

interface ButtonProps {
  // props
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button ref={ref} {...props} />;
  }
);

// After (React 19)
import React from 'react';

interface ButtonProps {
  // props
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button = ({ ref, ...props }: ButtonProps) => {
  return <button ref={ref} {...props} />;
};
```

## New Features

### Transitions API

React 19's Transitions API has been implemented in the Button component to provide smoother UI updates when button clicks trigger expensive operations. This feature helps maintain UI responsiveness during complex state updates.

#### How to Use the Transitions API

The Button component now supports the following props for transitions:

- `useTransitionEffect`: Boolean flag to enable/disable the transition effect
- `onTransitionStart`: Callback function that is called when the transition starts
- `onTransitionComplete`: Callback function that is called when the transition completes

Example usage:

```tsx
import { Button } from '@beverage-order-system/ui';

const MyComponent = () => {
  const handleExpensiveOperation = () => {
    // Some expensive operation
    console.log('Expensive operation completed');
  };

  const handleTransitionStart = () => {
    console.log('Transition started');
  };

  const handleTransitionComplete = () => {
    console.log('Transition completed');
  };

  return (
    <Button
      useTransitionEffect={true}
      onTransitionStart={handleTransitionStart}
      onTransitionComplete={handleTransitionComplete}
      onClick={handleExpensiveOperation}
    >
      Perform Expensive Operation
    </Button>
  );
};
```

#### Implementation Details

The Button component uses React's `useTransition` hook to create a transition:

```tsx
const [isPending, startTransition] = useTransition();
```

When a button with `useTransitionEffect={true}` is clicked:

1. The `onTransitionStart` callback is called
2. The click handler is wrapped in `startTransition`
3. The UI reflects the pending state (showing a loading indicator)
4. After the operation completes, the `onTransitionComplete` callback is called

This implementation ensures that the UI remains responsive even during complex state updates.

## Considerations for Developers

- When creating new components that need to accept refs, add the ref directly to the props interface instead of using `forwardRef`
- Consider using the Transitions API for operations that might cause UI jank
- Make sure to test components thoroughly with the new React 19 APIs