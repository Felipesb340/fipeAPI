import React from "react";

const SelectComponent = ({ options, onChange, label }) => {
  return (
    <div class=' flex flex-col mt-3 justify-center' > 
      <p class='pb-1 text-center' >{label} :</p>
      <select class='rounded-lg text-center flex h-10 text-lg text-[#b3cde0] bg-[#03396c]' onChange={onChange} defaultValue="">
        <option value="">Selecione...</option>
        {options && options.length > 0 ? (
          options.map((option) => (
            <option key={option.codigo} value={option.codigo}>
              {option.nome}
            </option>
          ))
        ) : (
          <option value="" disabled>
            Dados Indisponíveis
          </option>
        )}
      </select>
    </div>
  );
};

export default SelectComponent;
