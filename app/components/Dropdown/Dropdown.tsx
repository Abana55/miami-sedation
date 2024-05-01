"use client";
import Link from "next/link";
import styles from "./Dropdown.module.scss";

import React, { useState, useCallback } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback((event) => {
    console.log("Toggling Dropdown"); 
    event.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div onClick={toggleDropdown}>
      <button>Services</button>
      {isOpen && (
        <div>
          <p>Dental Implants</p>
          <p>Teeth Whitening</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;