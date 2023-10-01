// SlideMenu.tsx
interface SlideMenuProps {
  navBarElements: Array<string>;
  onClose: () => void;
  isOpen: boolean;
}

const SlideMenu = ({ navBarElements, onClose, isOpen }: SlideMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen z-50 bg-white p-5
        flex flex-col space-y-5 text-black transition-transform duration-3000 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
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
      <div className="h-screen flex flex-col justify-center items-center">
        <ul className="text-center">
          {navBarElements.map((element, index) => (
            <li key={index} className="no-underline my-8">
              <a className="font-bold" href={`#${element}`} onClick={onClose}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlideMenu;
