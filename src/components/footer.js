import React from 'react';
import { LifeOmic } from '../components/icons/lifeomic';

export const Footer = ({ pkgVersion }) => {
  return (
    <>
      <footer className="flex flex-col justify-center bg-gray-100 py-12 space-y-6 md:py-14 px-4 sm:px-6 lg:px-16 leading-5">
        <div className="max-w-limit mx-auto text-center text-sm text-gray-600 space-y-6 md:space-x-10 md:space-y-0 md:text-left md:flex">
          <div className="flex items-center space-x-2">
            <img
              src={`${process.env.BACKEND_URL}/doryan400x400.jpg`}
              alt="pixel crat avatar"
              className="bg-gray-200 h-8 w-8 md:h-8 md:w-8 rounded-full shadow-inner"
              loading="lazy"
            />
            <p>
              Designed by{' '}
              <a
                className="font-bold duration-300 ease-in-out transition-opacity hover:opacity-75 focus:outline-none focus-visible:shadow-outline focus-visible:underline"
                href="https://www.instagram.com/pixelcrat/"
                target="_blank"
              >
                @pixelcrat
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={`${process.env.BACKEND_URL}/tony400x400.jpg`}
              alt="why not draw avatar"
              className="bg-gray-200 h-8 w-8 md:h-8 md:w-8 rounded-full shadow-inner"
              loading="lazy"
            />
            <p>
              Developed by{' '}
              <a
                className="font-bold duration-300 ease-in-out transition-opacity hover:opacity-75 focus:outline-none focus-visible:shadow-outline focus-visible:underline"
                href="https://twitter.com/_ynotdraw"
                target="_blank"
                rel="noopener noreferrer"
              >
                @_ynotdraw
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <LifeOmic className="h-6 w-6" />
            <p>
              Built at{' '}
              <a
                className="font-bold duration-300 ease-in-out transition-opacity hover:opacity-75 focus:outline-none focus-visible:shadow-outline focus-visible:underline"
                href="https://www.lifeomic.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LifeOmic
              </a>
            </p>
          </div>
        </div>
        <div className="flex max-w-limit mx-auto text-center text-xs text-gray-600">
          <p>
            Released under MIT License | Copyright &copy;{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </>
  );
}

export default Footer;
