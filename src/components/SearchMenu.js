import React from "react";


const SearchMenu = ({ defaultWord, onSearch, onClear }) => {
  let _input;

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <button
          className="btn btn-secondary but-color"
          type="button"
          onClick={() => onSearch(_input.value)}
        >
          Buscar
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Búsqueda por palabra"
        aria-label=""
        aria-describedby="basic-addon1"
        defaultValue={defaultWord}
        ref={node => (_input = node)}
      />
      <button
        type="button"
        className="btn clear"
        onClick={() => onClear()}
      >
        Limpiar
      </button>
    </div>
  );
};

export default SearchMenu;


