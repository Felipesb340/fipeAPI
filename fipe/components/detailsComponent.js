import React from "react";

const DetailsComponent = ({ selectedCar }) => {
  return (
    <div class='flex flex-col justify-center text-center mt-9' >
      {selectedCar ? (
        <div class= 'py-2 space-y-2 rounded-2xl bg-[#03396c]' >
          <p><span>Ano:</span> {selectedCar.AnoModelo}</p>
          <p><span>Combustível:</span> {selectedCar.Combustivel}</p>
          <p><span>Modelo:</span> {selectedCar.Modelo}</p>
          {/* <p><span>{selectedCar.SiglaCombustivel}</p>
    <p><span>{selectedCar.TipoVeiculo}</p> */}
          <p><span>Valor:</span> {selectedCar.Valor}</p>
          <p><span>Mês Referência:</span> {selectedCar.MesReferencia}</p>
          <p><span>Código Fipe:</span> {selectedCar.CodigoFipe}</p>
        </div>
      ) : (
        <p class='text-xl py-5 flex flex-col justify-center text-center rounded-2xl bg-[#03396c]'>
          Selecione um veículo para ver os detalhes.
        </p>
      )}
    </div>
  );
};

export default DetailsComponent;
