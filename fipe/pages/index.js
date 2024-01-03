import React from "react";
import Main from "@/components/main";
import { useRouter } from "next/router";
export default function Page({ url, brands }) {


  return (
    <>
      <div class='flex justify-center' >
        <Main url={url} brands={brands} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  
  const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
  const data = await fetch(url);
  const jsonData = await data.json();

  return {
    props: {
      url,
      brands: jsonData,
    },
  };
}
