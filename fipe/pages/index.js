import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Page({ brands }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [brand, setBrand] = useState([]);
  const [years, setYears] = useState([]);

  // Realiza a req da marca
  useEffect(() => {
    // Função para fazer a requisição
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/`
        );
        setBrand(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Verifica se há um valor selecionado antes de fazer a requisição
    if (selectedBrand) {
      fetchData();
    }
  }, [selectedBrand]);

  // Realiza a req do Modelo
  useEffect(() => {
    // Função para fazer a requisição
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos`
        );
        setYears(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Verifica se há um valor selecionado antes de fazer a requisição
    if (selectedModel) {
      fetchData();
    }
  }, [selectedModel]);

  // Realiza a req do Ano e retorna todos os dados do carro
  useEffect(() => {
    // Função para fazer a requisição
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`
        );
        setSelectedCar(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Verifica se há um valor selecionado antes de fazer a requisição
    if (selectedYear) {
      fetchData();
    }
  }, [selectedYear]);

  // Função para lidar com a mudança no valor do select
  const handleSelectedBrand = (event) => {
    setSelectedBrand(event.target.value);
    console.log(event.target.value);
  };

  // Função para lidar com a mudança no valor do select
  const handleSelectModel = (event) => {
    setSelectedModel(event.target.value);
    console.log(event.target.value);
  };

  // Função para lidar com a mudança no valor do select
  const handleSelectedYear = (event) => {
    setSelectedYear(event.target.value);
    console.log(event.target.value);
  };

  const teste = () => {
    console.log(brand);
  };

  const testeModel = () => {
    console.log(years);
  };

  const testeDadosComplets = () => {
    console.log(selectedCar);
  };

  return (
    <>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor do seu carro aqui!</h3>

      <p>Selecione a Marca:</p>
      <div>
        {brands ? (
          <select onChange={handleSelectedBrand}>
            {brands.map((brand) => (
              <option key={brand.codigo} value={brand.codigo}>
                {brand.nome}
              </option>
            ))}
          </select>
        ) : (
          <p>Dados de carros não disponíveis.</p>
        )}
      </div>

      <button onClick={teste}>Imprimir Marca</button>

      <p>Selecione o Modelo:</p>
      <div>
        {brand.modelos ? (
          <select onChange={handleSelectModel}>
            {brand.modelos.map((model) => (
              <option key={model.codigo} value={model.codigo}>
                {model.nome}
              </option>
            ))}
          </select>
        ) : (
          <p>Dados de carros não disponíveis.</p>
        )}
      </div>

      <button onClick={testeModel}>Imprimir Modelo</button>

      <p>Selecione o Ano:</p>
      <div>
        {years ? (
          <select onChange={handleSelectedYear}>
            {years.map((year) => (
              <option key={year.codigo} value={year.codigo}>
                {year.nome}
              </option>
            ))}
          </select>
        ) : (
          <p>Dados de carros não disponíveis.</p>
        )}
      </div>

      <button onClick={testeDadosComplets}>Imprimir Carro</button>
      <div>    
      {selectedCar && (
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
      )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Aqui você coloca a lógica da função que deseja executar ao iniciar a página
  // Por exemplo, pode ser uma chamada a uma API para buscar dados iniciais
  const data = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  ); // Exemplo de chamada a uma API
  const jsonData = await data.json();
  console.log(jsonData);

  // Retorne os dados obtidos como propriedades para a página
  return {
    props: {
      brands: jsonData,
    },
  };
}
