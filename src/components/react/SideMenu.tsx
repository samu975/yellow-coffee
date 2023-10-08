interface SlideMenuProps {
  navBarElements: Array<string>;
  onClose: () => void;
  isOpen: boolean;
}

import AcercaDeNosotrosTitle from '../../assets/components/navbar/mush-coffee.svg';
import MushCoffee from '../../assets/components/navbar/acerca-de-nosotros.svg';
import PersonasTomandoCafe from '../../assets/PersonasTomandoCafe.png';

const SlideMenu = ({ navBarElements, onClose, isOpen }: SlideMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full pt-10 h-screen z-50 bg-white p-5
        flex flex-col space-y-5 text-black transition-transform duration-3000 ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
    >
      <button onClick={onClose} className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col justify-start w-full items-start pl-4">
        <ul>
          <li className="mt-4 mb-2 text-left">
            <a href="/yellow-coffee" className="font-bold text-2xl text-left">
              Yellow Coffee
            </a>
          </li>
          <li className="mt-6 mb-6">
            <a href="/mush-coffee" className="font-bold text-2xl mt-6 mb-6">
              <img
                src={MushCoffee.src}
                alt="Titulo de mushCoffe"
                className="w-6/12"
              />
            </a>
          </li>
          <li className="my-6 text-left">
            <a href="/mush-coffee" className="font-bold text-2xl">
              Accesorios
            </a>
          </li>
          <li className="-mt-3 mb-4">
            <a
              href="/nosotros"
              className="font-bold text-2xl flex items-center"
            >
              A
              <img
                src={AcercaDeNosotrosTitle.src}
                alt="Titulo de acerca de nosotros"
                className="-ml-6 w-10/12 mt-1"
              />
            </a>
          </li>
          <li className="mt-4 text-left">
            <a href="/contacto" className="font-bold text-2xl">
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <img
          src={PersonasTomandoCafe.src}
          alt="Imagen de personas tomando café"
        />
      </div>
    </div>
  );
};

export default SlideMenu;
