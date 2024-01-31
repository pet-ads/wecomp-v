import "./DropdownMenu.css";
import menu from "/images/menu.png";
import React, { useState, useRef } from "react";
import LogoIFSP from "../Logos/IFSPLogo";
function DropdownMenu() {
  const paths: string[] = ["Início", "Informações", "Parceiros", "Programação", "Local"];
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
      <LogoIFSP />
      <div className="dropdown" ref={dropdownRef} onMouseLeave={handleMouseLeave}>
        <div className="menu-image">
          <img src={menu} onClick={toggleDropdown} alt="Menu"></img>
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            {paths.map((path) => (
              <a href={`#${removeAccents(path.toLowerCase())}`}>{path}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
