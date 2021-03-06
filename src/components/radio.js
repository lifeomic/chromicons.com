import { Transition } from '@tailwindui/react';
import clsx from 'clsx';

export const Radio = ({
  className,
  checked,
  id,
  name,
  onChange,
  text,
  value,
}) => {
  return (
    <div className={clsx('relative', className)}>
      <input
        checked={checked}
        className="sr-only"
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label
        htmlFor={id}
        className={`text-gray-800 uppercase font-semibold tracking-widest cursor-pointer transition-opacity duration-300 ease-in-out text-xs hover:opacity-75 ${
          checked && 'text-teal-700'
        }`}
      >
        {text}
      </label>
      <Transition
        show={checked}
        enter="transition-opacity duration-300 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span
          className="absolute left-0 right-0 text-center text-xl text-teal-700 top-[1.6rem]"
          role="presentation"
          aria-hidden
        >
          •
        </span>
      </Transition>
    </div>
  );
};
