import React from "react";

const SelectComponent = ({ options, onChange, label }) => {
  return (
    <div>
      <p>{label} :</p>
      <select onChange={onChange} defaultValue="">
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
