// src/Dropdown.jsx
import React, { useState } from "react";

import "../assets/css/dropdown.css";

const Dropdown = ({ options, placeholder, handleChangeLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => {
                handleOptionClick(option);
                handleChangeLang(option.value);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
