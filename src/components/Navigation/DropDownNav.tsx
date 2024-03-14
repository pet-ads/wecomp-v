import "./DropdownMenu.css";
import menu from "/images/menu.png";
import React, { useState, useRef } from "react";

function DropdownMenu() {
  const paths: string[] = ["Início", "Informações", "Parceiros", "Programação", "Local", "Eventos Anteriores"];
  const removeAccentsAndSpaces = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget as Node)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="menu">
      <div className="dropdown" ref={dropdownRef} onMouseLeave={handleMouseLeave}>
        <div className="menu-image">
          <img src={menu} onClick={toggleDropdown} alt="Menu"></img>
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            {paths.map((path) => (
              <a href={`#${removeAccentsAndSpaces(path.trim().toLowerCase())}`}>{path}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
