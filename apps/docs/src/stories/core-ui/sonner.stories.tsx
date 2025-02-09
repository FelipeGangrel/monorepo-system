import { Button, Toaster } from '@felipegangrel/core-ui';
import * as React from 'react';
import { toast } from 'sonner';

/**
 * An opinionated toast component for React.
 */
const meta = {
  title: 'Core UI/Toast',
  decorators: [
    (Story: React.FC) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Example = () => {
  const onClick = () => {
    toast('Toast title');
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const WithDuration = () => {
  const onClick = () => {
    toast('Toast will dismiss in 5 seconds', { duration: 5_000 });
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const WithInfinityDuration = () => {
  const onClick = () => {
    toast('Toast will be here forever, unless you dismiss it 🤔', {
      duration: Infinity,
    });
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const WithDescription = () => {
  const onClick = () => {
    toast('Toast title', {
      description: 'Toast description',
    });
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const WithAction = () => {
  const onAction = () => {
    toast('Action clicked');
  };

  const onClick = () => {
    toast('Toast title', {
      description: 'Toast description',
      action: {
        label: 'Action',
        onClick: onAction,
      },
    });
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const SuccessExample = () => {
  const onClick = () => {
    toast.success('You are awesome!');
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const InfoExample = () => {
  const onClick = () => {
    toast.info('Hello world');
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const WarningExample = () => {
  const onClick = () => {
    toast.warning('Event is about to start');
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const ErrorExample = () => {
  const onClick = () => {
    toast.error('Something went wrong');
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const LoadingExample = () => {
  const fakeApiCall = (callback: () => void) => {
    new Promise((resolve) => {
      setTimeout(resolve, 3000);
    }).then(() => {
      callback();
    });
  };

  const onClick = () => {
    const toastId = toast.loading('Saving changes...');

    fakeApiCall(() => {
      toast.dismiss(toastId);
      toast.success('Changes saved');
    });
  };

  return <Button onClick={onClick}>Click me</Button>;
};

export const CustomExample = () => {
  const onClick = () => {
    toast('Custom toast', {
      className: 'bg-yellow-100 text-black border border-yellow-200',
      description: 'Custom description',
      action: (
        <Button variant="ghost" className="ml-auto">
          Action
        </Button>
      ),
    });
  };

  return <Button onClick={onClick}>Click me</Button>;
};
