import { CheckCircle } from '@lifeomic/chromicons/react/lined';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Transition } from '@tailwindui/react';
import { useEffect, useRef, useState } from 'react';
import Alert from '@reach/alert';
import clsx from 'clsx';

const Button = ({ className, children, ...rootProps }) => (
  <button
    className={clsx(
      'w-full py-2 text-sm font-bold h-12 text-white rounded-md relative duration-300 transition-shadow focus:outline-none focus:shadow-lg',
      className
    )}
    {...rootProps}
  >
    {children}
  </button>
);

export const IconModal = ({ icon, onDismiss }) => {
  const Icon = icon?.reactComponent;

  const iconContainerRef = useRef();

  const [copyState, setCopyState] = useState('default');

  useEffect(() => {
    if (copyState === 'clicked') {
      const handler = window.setTimeout(() => {
        setCopyState('default');
      }, 1500);
      return () => {
        window.clearTimeout(handler);
      };
    }
  }, [copyState]);

  return (
    <DialogOverlay
      className="transition-opacity flex flex-col justify-end sm:justify-center"
      isOpen={Boolean(icon)}
      onDismiss={onDismiss}
    >
      <DialogContent
        aria-label="Icon Details"
        className="bg-white text-black rounded-lg space-y-6 relative w-9/12 sm:max-w-sm"
      >
        <h3 className="text-lg leading-6 font-medium text-gray-800">
          {icon?.name}
        </h3>

        <div
          ref={iconContainerRef}
          className="flex justify-center items-center p-8 bg-gray-300 rounded-md"
        >
          {Boolean(Icon) && <Icon className="h-8 w-8" />}
        </div>

        {icon?.description && <p className="text-sm">{icon.description}</p>}

        <div className="flex flex-col space-y-3 justify-between md:space-y-0 md:flex-row sm:space-x-1">
          <Button
            className="bg-orange-400"
            onClick={() => {
              navigator.clipboard.writeText(
                `${iconContainerRef?.current?.innerHTML}`.replace(
                  / class="(.*?)"/s,
                  ''
                )
              );
              setCopyState('clicked');
            }}
          >
            <Transition
              show={copyState === 'default'}
              enter="transition-opacity duration-300 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-100 ease-in-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <span>Copy as SVG</span>
            </Transition>
            <Transition
              show={copyState === 'clicked'}
              enter="transition-opacity duration-300 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-100 ease-in-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <Alert
                  aria-live="assertive"
                  ref={ref}
                  className="flex justify-center space-x-2"
                >
                  <CheckCircle aria-hidden />
                  <span>Copied!</span>
                </Alert>
              )}
            </Transition>
          </Button>
        </div>

        <button
          aria-label="Close modal"
          className="absolute text-white rounded-full p-2"
          onClick={onDismiss}
          style={{ top: '-3rem', right: '-3rem' }}
        >
          <svg
            className="w-8 h-8 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </DialogContent>
    </DialogOverlay>
  );
};
