import React from "react";

const DetailsComponent = ({ selectedCar }) => {
  return (
    <div>
      {selectedCar ? (
        <div>
          <p>Ano: {selectedCar.AnoModelo}</p>
          <p>Combustível: {selectedCar.Combustivel}</p>
          <p>Modelo: {selectedCar.Modelo}</p>
          {/* <p>{selectedCar.SiglaCombustivel}</p>
    <p>{selectedCar.TipoVeiculo}</p> */}
          <p>Valor: {selectedCar.Valor}</p>
          <p>Mês Referência: {selectedCar.MesReferencia}</p>
          <p>Código Fipe: {selectedCar.CodigoFipe}</p>
        </div>
      ) : (
        <p>
          Nenhum veículo selecionado. Selecione um veículo para ver os detalhes.
        </p>
      )}
    </div>
  );
};

export default DetailsComponent;
