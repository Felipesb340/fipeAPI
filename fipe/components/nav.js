import React from "react";
import Link from "next/link";
// Se estiver usando um arquivo JS
import ListItem from "../components/listItem";


const Nav = ({pathName}) => {

  return (
    <>
      <div class="mb-2 p-5 flex flex-col space-y-7 text-center w-full h-full bg-[#03396c] ">
        <h1 class="text-6xl font-bold">Tabela Fipe</h1>
        <h3 class="text-3xl italic mb-5 ">
          Consulte o valor do seu veículo aqui!
        </h3>
        <ul class="flex flex-row space-x-8 justify-center mt-2">
          <ListItem isActive={pathName === '/'}>
            <Link href="/">Carros</Link>
          </ListItem>
          <ListItem isActive={pathName === '/motos'}>
            <Link href="/motos">Motos</Link>
          </ListItem>
          <ListItem isActive={pathName === '/caminhoes'}>
            <Link href="/caminhoes">Caminhões</Link>
          </ListItem>
        </ul>
      </div>
    </>
  );
};

export default Nav;
