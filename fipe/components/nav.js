import React from "react";
import Link from "next/link";


const Nav = () => {
  return (
    <>
      <ul>
        <h1>Tabela Fipe</h1>
        <h3>Consulte o valor do seu veículo aqui!</h3>
        <li><Link href='/' >Carros</Link></li>
        <li><Link href='/motos'>Motos</Link></li>
        <li><Link href='/caminhoes'>Caminhoes</Link></li>
      </ul>
      
    </>
  );
};

export default Nav;
