import React, { useState } from "react";
import Logo from "../../assets/Sello_Logo.svg";
import SearchIcon from "../../assets/search.svg";
import CartIcon from "../../assets/shop-bag-icon.svg";
import BurguerMenu from "../../assets/burguer_menu.svg";
import SlideMenu from "./SideMenu";

//Imagenes

interface NavBarContainerProps {
  navBarElements: Array<string>;
}

const NavBarContainer = ({ navBarElements }: NavBarContainerProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex pr-6 justify-between items-center shadow-lg fixed top-0 w-full bg-white">
      <div className="w-1/3">
        <img
          alt={"Imagen del logo de yellow coffe"}
          src={Logo.src}
          className="w-20"
        />
      </div>
      <div className="flex w-2/3 justify-end md:justify-center">
        <div className="flex gap-6 items-center md:hidden">
          <div>
            <img src={SearchIcon.src} alt="Icono de buscador" />
          </div>
          <div>
            <img src={CartIcon.src} alt="" />
          </div>
          <div
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={() => {
              console.log("click");
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
              <li className="no-underline" key={element + "1"}>
                <a className="font-bold" href={`#${element}`}>
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarContainer;
