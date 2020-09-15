import { CheckCircle } from '@lifeomic/chromicons/react/lined';
import { Chroma } from '../components/icons/chroma';
import { Chromicons } from '../components/icons/chromicons';
import { Flag } from '@lifeomic/chromicons/react/lined';
import { IconModal } from '../components/iconModal';
import { Lifeology } from '@lifeomic/chromicons/react/lined';
import { LifeOmic } from '../components/icons/lifeomic';
import { SearchField } from '../components/searchField';
import { Tile } from '../components/tile';
import { useState } from 'react';
import * as allLinedChromicons from '@lifeomic/chromicons/react/lined';
import Head from 'next/head';

const getChromicons = () => {
  const iconNames = Object.keys(allLinedChromicons);

  return iconNames?.map((icon) => {
    return {
      name: icon,
      reactComponent: allLinedChromicons[icon],
    };
  });
};

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
            <div className="flex items-center mx-3 space-x-2 text-orange-400 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt>
                <Lifeology className="h-6 w-6" role="img" aria-hidden />
              </dt>
              <dd className="uppercase">100 icons</dd>
            </div>
            <div className="flex items-center mx-3 space-x-2 text-teal-300 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt>
                <CheckCircle className="h-6 w-6" role="img" aria-hidden />
              </dt>
              <dd className="uppercase">MIT Licensed</dd>
            </div>
            <div className="flex items-center mx-3 space-x-2 text-purple-400 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt>
                <Flag className="h-6 w-6" role="img" aria-hidden />
              </dt>
              <dd className="uppercase">Version {pkgVersion}</dd>
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
          {getChromicons().map((icon) => {
            const Icon = icon.reactComponent;
            return (
              <Tile key={icon.name} onClick={() => setIconInView(icon)}>
                <Icon className="h-8 w-8" />
              </Tile>
            );
          })}
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
