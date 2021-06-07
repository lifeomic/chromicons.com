import { useState } from 'react';
import { Chromicons } from './icons/chromicons';
import { CheckCircle, Download, Flag, Lifeology } from '@lifeomic/chromicons';
import * as allLinedChromicons from '@lifeomic/chromicons';
import Head from 'next/head';
import clsx from 'clsx';

const HeroNavLink = ({ className, children, ...rootProps }) => {
  return (
    <a
      className={clsx(
        'flex items-center px-2 duration-300 ease-in-out transition-opacity hover:opacity-75 focus:outline-none focus-visible:shadow-dark-mode-outline focus-visible:underline',
        className
      )}
      {...rootProps}
    >
      {children}
    </a>
  );
};

export const Header = ({ pkgVersion }) => {
  return (
    <>
    <Head>
      <title>CHROMICONS</title>
      <link
        rel="shortcut icon"
        href={`${process.env.BACKEND_URL}/favicon.ico`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.BACKEND_URL}/favicon-16x16.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.BACKEND_URL}/favicon-32x32.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.BACKEND_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        type="image/png"
        sizes="144x144"
        href={`${process.env.BACKEND_URL}/chroma@2x.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        type="image/png"
        sizes="114x114"
        href={`${process.env.BACKEND_URL}/chroma@2x.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${process.env.BACKEND_URL}/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={`${process.env.BACKEND_URL}/android-icon-512x512.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.BACKEND_URL}/manifest.json`}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${process.env.BACKEND_URL}/chroma@2x.png`}
      />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
    <header>
        <div className="flex justify-between mb-16 w-3/4 m-auto mx-auto">
          <div className="py-12 flex items-center text-white -space-x-8">
            <div
              style={{cursor: 'pointer'}}
            >
              <Chromicons />
            </div>
            <dl className="items-center px-2 rounded-full text-xs bg-gradient-to-r from-super-orange to-super-blue -mt-8">
              <dt className="sr-only">Chromicons version</dt>
              <dd className="text-black">{pkgVersion}</dd>
            </dl>
          </div>
          <nav
            className="flex items-center text-black text-sm space-x-2 md:space-x-4"
            role="navigation"
            aria-label="Primary Navigation"
          >
            <HeroNavLink
              href="/about"
              rel="noopener noreferrer"
            >
              <span className="sr-only sm:not-sr-only">About</span>
            </HeroNavLink>
            <HeroNavLink
              href="https://github.com/lifeomic/chromicons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="mr-2"
                viewBox="0 0 24 24"
                height={24}
                width={24}
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="sr-only sm:not-sr-only">GitHub</span>
            </HeroNavLink>
            <HeroNavLink
              className="sr-only sm:not-sr-only sm:text-black sm:bg-super-yellow sm:rounded-md sm:px-4 sm:py-2 "
              href="https://github.com/lifeomic/chromicons/archive/master.zip"
            >
              <Download className="mr-2 h-4 w-4" role="img" aria-hidden />
              <span>Download All</span>
            </HeroNavLink>
          </nav>
        </div>
      </header>
    </>

  );

}

export default Header;
