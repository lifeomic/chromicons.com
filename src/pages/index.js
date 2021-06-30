import { CategoryFilters } from '../components/categoryFilters';
import { IconModal } from '../components/iconModal';
import { SearchField } from '../components/searchField';
import { Tile } from '../components/tile';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Transition } from '@tailwindui/react';
import { useState } from 'react';
import { CheckCircle, Flag, Lifeology } from '@lifeomic/chromicons';
import * as allLinedChromicons from '@lifeomic/chromicons';
import Head from 'next/head';
import metadata from '../util/metadata';

const getChromicons = () => {
  const iconNames = Object.keys(allLinedChromicons);

  return iconNames?.map((icon) => {
    return {
      name: icon.replace(
        /[A-Z]+(?![a-z])|[A-Z]|\d+/g,
        (value, separator) => (separator ? '-' : '') + value.toLowerCase()
      ),
      rawName: icon,
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <IconModal icon={iconInView} onDismiss={() => setIconInView(null)} />

      <Header pkgVersion={pkgVersion} />

      <main className="text-gray-600 flex flex-1 flex-col scrolling-touch w-3/4 m-auto bg-transparent">
        <div className="flex sm:flex-col xl:flex-row relative mb-16">
          <div>
            <h1 className="text-black text-2xl leading-9 font-bold sm:text-4xl sm:leading-10 uppercase">
              Handcrafted open source icons
            </h1>
            <p className="text-black max-w-lg text-sm sm:text-base pt-5 pb-5">
              Ready to use in web, iOS, Android, and desktop apps. Support for
              SVG and web font. Completely open source, MIT licensed, and built
              with
              <span className="text-red-600" role="img" aria-label="love">
                {' '}
                ♥️{' '}
              </span>
              by the team at LifeOmic.
            </p>
            <dl className="flex flex-wrap whitespace-no-wrap text-xs font-bold leading-5 sm:text-sm">
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
          <div>
            <img
              src={`${process.env.BACKEND_URL}/big-icon.png`}
              className="absolute"
              alt="home banner"
              style={{
                bottom: -16,
                right: -5,
                top: -75,
                zIndex: -1,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-start shadow-banner px-4 sm:px-6 lg:px-6 bg-white flex-col md:flex-row">
          <CategoryFilters
            className="md:-mt-4 md:mr-8 flex w-full justify-evenly md:justify-start whitespace-nowrap"
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
          <div className="pb-6 w-full">
            <SearchField
              className="pt-6 w-full sm:px-6 md:px-0 md:mb-0"
              inputClassName="w-full"
              onChange={(search) => {
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
                      icon.rawName
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                      icon.name?.toLowerCase().includes(search.toLowerCase()) ||
                      icon?.keywords
                        ?.toLowerCase()
                        ?.includes(search.toLowerCase())
                  )
                );
              }}
            />
          </div>
        </div>
        {visibleIcons?.length > 0 ? (
          <div className="flex flex-wrap items-start justify-center mx-auto mb-8 min-h-1/2 w-full bg-white">
            {visibleIcons?.map((icon) => {
              const Icon = icon.reactComponent;
              return (
                <Tile
                  name={icon.name}
                  key={icon.name}
                  isOpen={iconInView?.name === icon?.name}
                  onClick={() => setIconInView(icon)}
                >
                  <Icon className="-mt-4 h-6 w-6 stroke-current" />
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
                  'Icon request'
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
      <Footer />
    </>
  );
}
