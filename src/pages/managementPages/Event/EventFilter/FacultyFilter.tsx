import { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./FilterLayout.styled";

const FacultyFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedItem || "Faculty Filter"}{" "}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick("Faculty 1")}>
          Faculty 1
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Faculty 2")}>
          Faculty 2
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Faculty 3")}>
          Faculty 3
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default FacultyFilter;
