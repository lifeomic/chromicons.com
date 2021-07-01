import { LifeOmic } from '../components/icons/lifeomic';

export const Footer = ({ pkgVersion }) => {
  return (
    <footer className="flex flex-col justify-center bg-gray-100 py-12 space-y-6 md:py-14 px-4 sm:px-6 lg:px-16 leading-5">
      <div className="max-w-limit mx-auto text-center text-sm text-gray-600 space-y-6 md:space-x-10 md:space-y-0 md:text-left md:flex">
        <div className="flex flex-col justify-center items-center">
          <p>
            Designed by
          </p>
          <div className="flex justify-center relative">
            <a
              className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline mt-2"
              href="https://www.instagram.com/pixelcrat/"
              target="_blank"
            >
              <img
                src={`${process.env.BACKEND_URL}/doryan400x400.jpg`}
                alt="pixel crat avatar"
                className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full shadow-inner border-gray-100 border-2 ml-4"
                loading="lazy"
              />
            </a>
            <a
              className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline mt-2"
              href="https://www.instagram.com/dexterca/"
              target="_blank"
            >
              <img
                src={`${process.env.BACKEND_URL}/casey512x512.jpeg`}
                alt="dexter c a avatar"
                className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full shadow-inner border-gray-100 border-2 relative -left-2"
                loading="lazy"
              />
            </a>
            <a
              className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline mt-2"
              href="https://dribbble.com/ThirstyInteractive"
              target="_blank"
            >
              <img
                src={`${process.env.BACKEND_URL}/jay512x512.png`}
                alt="jay moore avatar"
                className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full shadow-inner border-gray-100 border-2 relative -left-4"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:relative md:-left-3">
          <p className="text-center">
            Developed by
          </p>
          <div className="flex justify-center relative">
            <a
              className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline mt-2"
              href="https://github.com/ghgamble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.BACKEND_URL}/grace466x466.jpg`}
                alt="g h gamble avatar"
                className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full shadow-inner border-gray-100 border-2 ml-2"
                loading="lazy"
              />
            </a>
            <a
              className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline mt-2"
              href="https://twitter.com/_ynotdraw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.BACKEND_URL}/tony475x475.png`}
                alt="why not draw avatar"
                className="bg-gray-200 h-8 w-8 md:h-10 md:w-10 rounded-full shadow-inner border-gray-100 border-2 relative -left-2"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col justify-center items-center -mt-1">
            <p className="text-center mb-3">
              Built at LifeOmic
            </p>
            <div className="flex">
              <a
                className="font-bold duration-300 ease-out transform hover:z-10 hover:scale-110 focus:outline-none focus-visible:shadow-outline focus-visible:underline"
                href="https://www.lifeomic.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LifeOmic className="h-8 w-8 -mt-[2rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-limit mx-auto text-center text-xs text-gray-600">
        <p>
          Released under MIT License | Copyright &copy;{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
