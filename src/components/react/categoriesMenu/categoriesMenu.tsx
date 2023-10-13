import React from 'react';
import CoffeDrip from '../../assets/components/navbar/categorias/coffe-drip.svg';
import Yellow340 from '../../assets/components/navbar/categorias/yellow340.svg';
import Yellow2500 from '../../assets/components/navbar/categorias/yellow2500gr.svg';

export const categoriesMenu = () => {
  return (
    <div
      className="w-full pt-24 pb-4 flex justify-around text-xs -mb-[68px]"
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
  );
};
