import { Chroma } from '../components/icons/chroma';
import { Chromicons } from '../components/icons/chromicons';
import { IconModal } from '../components/iconModal';
import { LifeOmic } from '../components/icons/lifeomic';
import { SearchField } from '../components/searchField';
import { Tile } from '../components/tile';
import { useState } from 'react';
import Head from 'next/head';

const ALL_ICONS = Array(40).fill(
  <svg className="h-12 w-12" viewBox="0 0 56 57" fill="none">
    <path
      d="M36.078 22.53a12.66 12.66 0 014.19 0c3.956.698 7.215 3.956 8.146 7.913 1.396 6.75-3.724 12.802-10.242 12.802h-17.69c-3.49 0-6.75-1.164-9.077-3.492-2.793-3.025-4.422-6.75-4.422-10.94 0-8.146 6.75-15.128 14.896-15.128 8.38-.233 15.362 6.75 15.362 15.129"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function getStaticProps() {
  return {
    props: { pkgVersion: require('@lifeomic/chromicons/package.json').version },
  };
}

export default function IndexPage({ pkgVersion }) {
  const [iconInView, setIconInView] = useState(null);

  return (
    <>
      <Head>
        <title>CHROMICONS</title>
      </Head>
      <IconModal
        iconInView={iconInView}
        onDismiss={() => setIconInView(null)}
      />
      <header className="px-4 sm:px-6 lg:px-16 bg-gray-800 pb-16">
        <div className="max-w-container mx-auto">
          <div className="py-12 flex items-center text-white space-x-2">
            <Chroma />
            <Chromicons />

            <dl className="mt-0 mb-1 inline-flex items-center px-2 rounded-full text-xs bg-gradient-to-r from-super-orange to-super-blue">
              <dt className="sr-only">Chromicons version</dt>
              <dd>{pkgVersion}</dd>
            </dl>
          </div>
        </div>
        <div className="w-full flex-none text-center space-y-6 xl:w-auto xl:flex-auto">
          <h1 className="text-white text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10">
            Handcrafted open source icons
          </h1>
          <p className="text-gray-400 text-opacity-75 max-w-lg mx-auto">
            Ready to use in web, iOS, Android, and desktop apps. Support for SVG
            and web font. Completely open source, MIT licensed, and built with
            <span className="text-red-600"> ♥️ </span>by the team at LifeOmic.
          </p>
          <dl className="flex flex-wrap justify-center whitespace-no-wrap text-sm font-medium leading-5">
            <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt className="sr-only">icon here soon™</dt>
              <dd className="text-orange-400">100 ICONS</dd>
            </div>
            <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt className="sr-only">icon here soon™</dt>
              <dd className="text-teal-300">MIT LICENSED</dd>
            </div>
            <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt className="sr-only">icon here soon™</dt>
              <dd className="text-purple-400">VERSION 1.0</dd>
            </div>
          </dl>
        </div>
      </header>

      <main className="bg-white text-gray-600">
        <div className="flex flex-col md:flex-row px-8 py-6 items-center w-full shadow-md">
          <div className="ml-auto hidden md:block">
            <SearchField />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 px-4 my-4 sm:px-6 lg:px-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ALL_ICONS?.map((icon, index) => (
            <Tile key={index} onClick={() => setIconInView(icon)}>
              {icon}
            </Tile>
          ))}
        </div>
      </main>

      <footer className="flex flex-col justify-center bg-gray-200 border-gray-300 border-t py-12 space-y-6 md:py-14 px-4 sm:px-6 lg:px-16 leading-5">
        <div className="max-w-container mx-auto text-center text-sm text-gray-700 space-y-6 md:space-x-10 md:space-y-0 md:text-left md:flex">
          <div className="flex items-center space-x-2">
            <img
              src={require('../img/doryan400x400.jpg').default}
              alt="pixel crat avatar"
              className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full"
              loading="lazy"
            />
            <p>
              Designed by{' '}
              <a
                className="font-bold"
                href="https://twitter.com/pixelcrat"
                target="_blank"
              >
                @pixelcrat
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={require('../img/tony400x400.jpg').default}
              alt="why not draw avatar"
              className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full"
              loading="lazy"
            />
            <p>
              Developed by{' '}
              <a
                className="font-bold"
                href="https://twitter.com/_ynotdraw"
                target="_blank"
              >
                @_ynotdraw
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <LifeOmic className="h-8 w-8" />
            <p>
              Built at{' '}
              <a
                className="font-bold"
                href="https://www.lifeomic.com"
                target="_blank"
              >
                LifeOmic
              </a>
            </p>
          </div>
        </div>
        <div className="flex max-w-container mx-auto text-center text-xs text-gray-600">
          <p>
            Released under MIT License | Copyright &copy;{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
