import React from "react";
import Main from "@/components/main";

export default function Motos({ url, brands }) {
  return (
    <>
      <Main url={url} brands={brands} />
    </>
  );
}

export async function getServerSideProps() {

  const url = "https://parallelum.com.br/fipe/api/v1/motos/marcas";
  const data = await fetch(url);
  const jsonData = await data.json();

  return {
    props: {
      url,
      brands: jsonData,
    },
  };
}
