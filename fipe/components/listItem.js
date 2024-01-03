// components/ListItem.js
import React from 'react';

const ListItem = ({isActive, children, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const cor = isActive ? 'bg-[#005b96]' : 'bg-[#011f4b]';
  const estilo = `text-2xl px-3 py-2 rounded-lg drop-shadow-md hover:bg-[#005b96] ${cor}`;

  return (
    <button className={estilo} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ListItem;

