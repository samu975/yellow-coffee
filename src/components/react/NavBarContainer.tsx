import React, { useState, useEffect } from 'react';

//Imagenes
import Logo from '../../assets/Sello_Logo.svg';
import SearchIcon from '../../assets/search.svg';
import CartIcon from '../../assets/shop-bag-icon.svg';
import BurguerMenu from '../../assets/burguer_menu.svg';
import SlideMenu from './SideMenu';
import Yellow from '../../assets/components/navbar/categorias/yellow.svg';
import Mush from '../../assets/components/navbar/categorias/mush.png';
import Accesories from '../../assets/components/navbar/categorias/Accesorios.png';
import CoffeDrip from '../../assets/components/navbar/categorias/yellow/coffe-drip.svg';
import Yellow340 from '../../assets/components/navbar/categorias/yellow/yellow340.svg';
import Yellow2500 from '../../assets/components/navbar/categorias/yellow/yellow2500gr.svg';
import Mush40 from '../../assets/components/navbar/categorias/mush/mush-mini.png';
import Mush125 from '../../assets/components/navbar/categorias/mush/mush-medium.png';
import Mush340 from '../../assets/components/navbar/categorias/mush/mush-big.png';

interface NavBarContainerProps {
  navBarElements: Array<string>;
}

const NavBarContainer = ({ navBarElements }: NavBarContainerProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menuType: string) => {
    if (menuType === activeMenu) {
      setActiveMenu('');
    } else {
      setActiveMenu(menuType); // Si no, abre el menú seleccionado
    }
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Si el menú está abierto y el clic no fue dentro del menú o en el ícono, cierra el menú
      if (
        activeMenu &&
        !event.target.closest('.menu-icon') &&
        !event.target.closest('.menu-content')
      ) {
        setActiveMenu('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <>
      <div className="flex pr-6 justify-between items-center shadow-lg fixed top-0 w-full bg-white/60 z-50">
        <div className="w-1/3">
          <a href="/">
            <img
              alt={'Imagen del logo de yellow coffe'}
              src={Logo.src}
              className="w-20"
            />
          </a>
        </div>
        <div className="flex w-2/3 justify-end md:justify-center">
          <div className="flex gap-6 items-center md:hidden">
            <div>
              <img src={SearchIcon.src} alt="Icono de buscador" />
            </div>
            <div className="menu-icon">
              <img
                src={CartIcon.src}
                alt="Icono de bolsa de compras"
                onClick={() => {
                  handleMenuClick('categoryMenu');
                }}
              />
            </div>
            <div
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {!menuOpen ? (
                <img src={BurguerMenu.src} alt="Icono de abrir menú" />
              ) : (
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
              )}
            </div>
            {menuOpen && (
              <SlideMenu
                navBarElements={navBarElements}
                onClose={() => setMenuOpen(false)}
                isOpen={menuOpen}
              />
            )}
          </div>
          {/* Menu de navegacion desktop */}
          <div className="hidden md:flex md:justify-around md:w-full">
            <ul className="flex w-full justify-around">
              {navBarElements.map((element) => (
                <li className="no-underline" key={element + '1'}>
                  <a className="font-bold" href={`#${element}`}>
                    {element}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Menus */}
      {activeMenu === 'categoryMenu' ? (
        <div
          className="w-full pb-4 pt-4 flex justify-around text-xs -mb-[68px] fixed z-50 opacity-90 menu-content"
          style={{ backgroundColor: '#E9E5E1' }}
        >
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('yellowMenu');
            }}
          >
            <img
              src={Yellow.src}
              alt="Tipo de cafe Coffe Drip"
              className="w-8/12"
            />
            <p>Yellow Coffee</p>
          </div>
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('mushMenu');
            }}
          >
            <img
              src={Mush.src}
              alt="Tipo de café yellow 340 gr"
              className="w-8/12"
            />
            <p>Mush Coffee</p>
          </div>
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={Accesories.src}
              alt="Tipo de café Yellow 2500"
              className="w-8/12"
            />
            <p>Accesorios</p>
          </div>
        </div>
      ) : activeMenu === 'yellowMenu' ? (
        <div
          className="w-full pb-4 pt-4 flex justify-around text-xs -mb-[68px] fixed z-50 opacity-90 menu-content"
          style={{ backgroundColor: '#E9E5E1' }}
        >
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={() => {
              navigateTo('/yellow-coffee/drip');
            }}
          >
            <img
              src={CoffeDrip.src}
              alt="Tipo de cafe Coffe Drip"
              className="w-8/12"
            />
            <p>Coffee Drip</p>
          </div>
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={() => {
              navigateTo('/yellow-coffee/340');
            }}
          >
            <img
              src={Yellow340.src}
              alt="Tipo de café yellow 340 gr"
              className="w-8/12"
            />
            <p>Yellow 340gr</p>
          </div>
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={() => {
              navigateTo('/yellow-coffee/2500');
            }}
          >
            <img
              src={Yellow2500.src}
              alt="Tipo de café Yellow 2500"
              className="w-8/12"
            />
            <p>Yellow 2500gr</p>
          </div>
        </div>
      ) : activeMenu === 'mushMenu' ? (
        <div
          className="w-full pb-4 pt-4 flex justify-around text-xs -mb-[68px] fixed z-50 opacity-90 menu-content"
          style={{ backgroundColor: '#E9E5E1' }}
          onClick={() => {
            navigateTo('/mush-coffee/drip');
          }}
        >
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={CoffeDrip.src}
              alt="Tipo de cafe Coffe Drip"
              className="w-8/12"
            />
            <p>Coffee Drip</p>
          </div>
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={() => {
              navigateTo('/mush-coffee/40');
            }}
          >
            <img
              src={Mush40.src}
              alt="Tipo de café mush 40 gr"
              className="w-7/12"
            />
            <p>Mush 40gr</p>
          </div>
          <div
            className="flex flex-col justify-end gap-1 items-center"
            onClick={() => {
              navigateTo('/mush-coffee/125');
            }}
          >
            <img
              src={Mush125.src}
              alt="Tipo de café mush 125"
              className="w-8/12"
            />
            <p>Mush 125gr</p>
          </div>
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={Mush340.src}
              alt="Tipo de café Mush 340"
              className="w-9/12"
            />
            <p>Mush 340gr</p>
          </div>
        </div>
      ) : activeMenu === 'accesoriesMenu' ? (
        <div
          className="w-full pb-4 pt-4 flex justify-around text-xs -mb-[68px] fixed z-50 opacity-90 menu-content"
          style={{ backgroundColor: '#E9E5E1' }}
        >
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={CoffeDrip.src}
              alt="Tipo de cafe Coffe Drip"
              className="w-8/12"
            />
            <p>Coffee Drip</p>
          </div>
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={Yellow340.src}
              alt="Tipo de café yellow 340 gr"
              className="w-8/12"
            />
            <p>Yellow 340gr</p>
          </div>
          <div className="flex flex-col justify-end gap-1 items-center">
            <img
              src={Yellow2500.src}
              alt="Tipo de café Yellow 2500"
              className="w-8/12"
            />
            <p>Yellow 2500gr</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBarContainer;
