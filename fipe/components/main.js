import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectComponent from "@/components/selectComponent";
import DetailsComponent from "@/components/detailsComponent";
import Link from "next/link";

export default function Main({ url, brands }) {
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
        const response = await axios.get(`${url}/${selectedBrand}/modelos/`);
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
          `${url}/${selectedBrand}/modelos/${selectedModel}/anos`
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
          `${url}/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`
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

  const handleSelectedBrand = (event) => {
    setSelectedBrand(event.target.value);
    console.log(event.target.value);
  };

  const handleSelectModel = (event) => {
    setSelectedModel(event.target.value);
    console.log(event.target.value);
  };

  const handleSelectedYear = (event) => {
    console.log(event.target.value);
    setSelectedYear(event.target.value);
  };

  return (
    <>
      <div class='flex flex-col justify-center w-4/12' >
        <SelectComponent
          options={brands}
          onChange={handleSelectedBrand}
          label="Selecione a Marca"
        />

        <SelectComponent
          options={brand.modelos}
          onChange={handleSelectModel}
          label="Selecione o Modelo"
        />

        <SelectComponent
          options={years}
          onChange={handleSelectedYear}
          label="Selecione o Ano"
          // defaultValue={selectedBrand}
        />

        <DetailsComponent selectedCar={selectedCar} />
      </div>
    </>
  );
}
