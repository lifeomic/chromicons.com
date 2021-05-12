import { CategoryFilters } from '../components/categoryFilters';
import { Chromicons } from '../components/icons/chromicons';
import { IconModal } from '../components/iconModal';
import { LifeOmic } from '../components/icons/lifeomic';
import { SearchField } from '../components/searchField';
import { Tile } from '../components/tile';
import { Transition } from '@tailwindui/react';
import { useState } from 'react';
import { CheckCircle, Download, Flag, Lifeology } from '@lifeomic/chromicons';
import * as allLinedChromicons from '@lifeomic/chromicons';
import clsx from 'clsx';
import Head from 'next/head';
import metadata from '../util/metadata';

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

const getChromicons = () => {
  const iconNames = Object.keys(allLinedChromicons);

  return iconNames?.map((icon) => {
    return {
      name: icon,
      keywords: metadata[icon]?.keywords,
      categories: metadata[icon]?.categories,
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
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchText, setSearchText] = useState('');

  const [visibleIcons, setVisibleIcons] = useState(() => getChromicons('all'));

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
      </Head>

      <IconModal icon={iconInView} onDismiss={() => setIconInView(null)} />

      <header
        className="px-4 sm:px-6 lg:px-16 bg-gray-800 pb-32 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${process.env.BACKEND_URL}/bg-cover.svg)`,
        }}
      >
        <div className="max-w-limit mx-auto flex justify-between mb-16 ">
          <div className="py-12 flex items-center text-white space-x-2">
            <Chromicons />

            <dl className="mt-0 mb-1 inline-flex items-center px-2 rounded-full text-xs bg-gradient-to-r from-super-orange to-super-blue">
              <dt className="sr-only">Chromicons version</dt>
              <dd>{pkgVersion}</dd>
            </dl>
          </div>
          <nav
            className="flex items-center text-white text-sm space-x-2 md:space-x-4"
            role="navigation"
            aria-label="Primary Navigation"
          >
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
              className="sr-only sm:not-sr-only sm:text-white sm:bg-gray-700 sm:rounded-md sm:px-4 sm:py-2 "
              href="https://github.com/lifeomic/chromicons/archive/master.zip"
            >
              <Download className="mr-2 h-4 w-4" role="img" aria-hidden />
              <span>Download All</span>
            </HeroNavLink>
          </nav>
        </div>
        <div className="w-full flex-none text-center space-y-6 font-hero xl:w-auto xl:flex-auto">
          <h1 className="text-white text-2xl leading-9 font-semibold sm:text-4xl sm:leading-10">
            Handcrafted open source icons
          </h1>
          <p className="text-gray-400 text-opacity-75 max-w-lg mx-auto text-sm sm:text-base">
            Ready to use in web, iOS, Android, and desktop apps. Support for SVG
            and web font. Completely open source, MIT licensed, and built with
            <span className="text-red-600" role="img">
              {' '}
              ♥️{' '}
            </span>
            by the team at LifeOmic.
          </p>
          <dl className="flex flex-wrap justify-center whitespace-no-wrap text-xs font-bold leading-5 sm:text-sm">
            <div className="flex items-center mx-3 space-x-2 text-orange-400 sm:mx-4 xl:ml-0 xl:mr-8">
              <dt>
                <Lifeology className="h-6 w-6" role="img" aria-hidden />
              </dt>
              <dd className="uppercase">
                {Object.keys(allLinedChromicons).length} icons
              </dd>
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

      <main className="bg-white text-gray-600 scrolling-touch">
        <div className="flex justify-between items-center shadow-banner px-4 flex-col md:flex-row sm:px-6 lg:px-16">
          <CategoryFilters
            className="mt-4"
            selectedTab={selectedTab}
            onChange={(filter) => {
              setSelectedTab(filter);
              setSearchText('');

              if (filter === 'all') {
                setVisibleIcons(getChromicons());
                return;
              }

              if (filter === 'ui') {
                setVisibleIcons(
                  getChromicons()?.filter((icon) =>
                    icon?.categories?.includes('ui')
                  )
                );
                return;
              }

              if (filter === 'science') {
                setVisibleIcons(
                  getChromicons()?.filter((icon) =>
                    icon?.categories?.includes('science')
                  )
                );
                return;
              }

              if (filter === 'health') {
                setVisibleIcons(
                  getChromicons()?.filter((icon) =>
                    icon?.categories?.includes('health')
                  )
                );
                return;
              }
            }}
          />
          <SearchField
            className="mb-4 w-full sm:px-6 md:px-0 md:mb-0 md:w-auto"
            inputClassName="w-full md:w-auto"
            value={searchText}
            onChange={(e) => {
              const search = e.target.value;

              setSearchText(e.target.value);

              const filteredIcons =
                selectedTab !== 'all'
                  ? getChromicons()?.filter((icon) =>
                      icon?.categories?.includes(selectedTab)
                    )
                  : getChromicons();

              if (!search) {
                setVisibleIcons(filteredIcons);
                return;
              }

              setVisibleIcons(
                filteredIcons?.filter(
                  (icon) =>
                    icon.name.toLowerCase().includes(search.toLowerCase()) ||
                    icon?.keywords
                      ?.toLowerCase()
                      ?.includes(search.toLowerCase())
                )
              );
            }}
          />
        </div>
        {visibleIcons?.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 px-4 my-4 max-w-6xl mx-auto sm:px-6 lg:px-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {visibleIcons?.map((icon) => {
              const Icon = icon.reactComponent;
              return (
                <Tile
                  name={icon.name}
                  key={icon.name}
                  isOpen={iconInView?.name === icon?.name}
                  onClick={() => setIconInView(icon)}
                >
                  <Icon className="h-6 w-6" />
                </Tile>
              );
            })}
          </div>
        ) : (
          <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-300 ease-in"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-250 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="py-10 text-center font-bold space-y-2">
              <p>It looks like we don't have an icon for that yet!</p>
              <a
                href={`https://github.com/lifeomic/chromicons/issues/new?title=${encodeURIComponent(
                  `"${searchText}" icon request`
                )}`}
                className="text-sm text-blue-600 duration-300 ease-in-out transition-opacity hover:opacity-75 focus:outline-none focus-visible:shadow-outline focus-visible:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Please file a GitHub issue.
              </a>
            </div>
          </Transition>
        )}
      </main>

      <footer className="flex flex-col justify-center bg-gray-200 border-gray-300 border-t py-12 space-y-6 md:py-14 px-4 sm:px-6 lg:px-16 leading-5">
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
