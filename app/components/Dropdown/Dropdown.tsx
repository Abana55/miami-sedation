"use client";
import Link from "next/link";
import styles from "./Dropdown.module.scss";
import React, { useState, useCallback } from 'react';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    console.log("Current state before toggle:", isOpen);
    setIsOpen(!isOpen);
    console.log("Current state after toggle:", isOpen);
  };

  return (
    <div onClick={toggleDropdown}>
      <button>Toggle Dropdown</button>
      {isOpen && <div>Dropdown Content</div>}
    </div>
  );
};
export default Dropdown;